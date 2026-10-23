import os

import gradio as gr
from fastapi import FastAPI
from huggingface_hub import InferenceClient
from gradio.routes import mount_gradio_app

MODEL_ID = "moonshotai/Kimi-K2.7-Code"
API_TOKEN = os.environ.get("HF_TOKEN")

inference = InferenceClient(model=MODEL_ID, token=API_TOKEN)

EXAMPLES = [
    "Write a Python function that reverses a string.",
    "Generate a JavaScript function to fetch JSON data from an API endpoint.",
    "Create a SQL query to find the top 10 customers by order total.",
    "Write a Rust function that computes the factorial of an integer.",
]


def generate_code(prompt: str, max_tokens: int = 256, temperature: float = 0.2):
    if not prompt or not prompt.strip():
        return "Please enter a prompt to generate code."

    try:
        output = inference.text_generation(
            prompt,
            max_new_tokens=int(max_tokens),
            temperature=float(temperature),
            top_p=0.95,
            repetition_penalty=1.05,
            return_full_text=False,
        )
        return output.strip() if isinstance(output, str) else "No output from the model."
    except Exception as exc:
        return f"Error: {exc}"


demo = gr.Blocks(title="Kimi K2.7 Code Demo")
with demo:
    gr.Markdown(
        "# Kimi K2.7 Code Demo\n"
        "Generate code snippets with the `moonshotai/Kimi-K2.7-Code` model.\n\n"
        "Enter a task request and click **Generate** to see code output."
    )
    with gr.Row():
        with gr.Column():
            prompt_input = gr.Textbox(
                label="Prompt",
                placeholder="Describe the code you want to generate...",
                lines=5,
                value="Write a Python function that reverses a string.",
            )
            max_tokens = gr.Slider(64, 1024, value=256, step=64, label="Max Tokens")
            temperature = gr.Slider(0.0, 1.0, value=0.2, step=0.05, label="Temperature")
            generate_button = gr.Button("Generate")
        with gr.Column():
            output_area = gr.Textbox(label="Generated Code", lines=18)
    generate_button.click(
        generate_code,
        inputs=[prompt_input, max_tokens, temperature],
        outputs=output_area,
    )
    gr.Examples(examples=EXAMPLES, inputs=prompt_input)
    gr.Markdown(
        "---\n"
        "**Notes:**\n"
        "- If the model requires authentication, set `HF_TOKEN` in the project environment.\n"
        "- Generation uses the Hugging Face Inference API."
    )

# Vercel's Python runtime needs a top-level ASGI application entrypoint.
app = mount_gradio_app(FastAPI(), demo, path="/")
