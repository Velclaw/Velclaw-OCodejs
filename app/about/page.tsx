import Link from 'next/link'
import { ArrowUpRight, Boxes, Code2, ShieldCheck, Workflow } from 'lucide-react'

export const metadata = {
  title: 'Giới thiệu Velclaw',
  description: 'Tìm hiểu nền tảng Velclaw, kiến trúc AI-native và hệ sinh thái dành cho developer.',
}

const principles = [
  { icon: Code2, title: 'Developer-first', text: 'Một quy trình rõ ràng để viết mã, kiểm tra, review và phát hành phần mềm.' },
  { icon: Workflow, title: 'Agent-native', text: 'Đưa agent, công cụ và ngữ cảnh vào cùng vòng đời phát triển.' },
  { icon: Boxes, title: 'Composable ecosystem', text: 'Các sản phẩm và dịch vụ kết nối qua giao diện, API và hợp đồng tích hợp.' },
  { icon: ShieldCheck, title: 'Security by design', text: 'Không đưa secrets ra trình duyệt; xác minh trạng thái bằng bằng chứng thực tế.' },
]

export default function AboutPage() {
  return (
    <main className="mx-auto min-h-screen max-w-6xl px-5 py-14 text-foreground md:px-8 md:py-20">
      <Link href="/" className="text-sm text-muted-foreground hover:text-foreground">← Velclaw home</Link>
      <div className="mt-12 max-w-3xl">
        <p className="font-mono text-xs tracking-[0.25em] text-violet-400">ABOUT / VELCLAW</p>
        <h1 className="mt-5 text-4xl font-semibold tracking-tight md:text-6xl">Build software.<br /><span className="text-violet-400">Keep the workflow together.</span></h1>
        <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">Velclaw là workspace phát triển phần mềm AI-native cho agent, developer và nhóm kỹ thuật. Mục tiêu là kết nối project, code, build, runtime, review và deployment thành một quy trình có thể kiểm chứng.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/apps" className="inline-flex items-center gap-2 border border-violet-400/40 bg-violet-500/10 px-4 py-3 text-sm hover:bg-violet-500/20">Khám phá ứng dụng <ArrowUpRight size={16} /></Link>
          <Link href="/docs" className="inline-flex items-center gap-2 border border-border px-4 py-3 text-sm hover:bg-muted">Đọc tài liệu <ArrowUpRight size={16} /></Link>
        </div>
      </div>
      <section className="mt-16 grid gap-4 sm:grid-cols-2">
        {principles.map(({ icon: Icon, title, text }, index) => (
          <article key={title} className="border border-border bg-card/60 p-6 md:p-8">
            <div className="flex items-center justify-between"><Icon className="text-violet-400" size={22} /><span className="font-mono text-xs text-muted-foreground">0{index + 1}</span></div>
            <h2 className="mt-8 text-xl font-semibold">{title}</h2><p className="mt-3 text-sm leading-7 text-muted-foreground">{text}</p>
          </article>
        ))}
      </section>
      <section className="mt-12 border border-border p-6 md:p-8">
        <p className="font-mono text-xs tracking-widest text-muted-foreground">WORKFLOW</p>
        <div className="mt-5 grid gap-3 text-sm sm:grid-cols-5">{['Task', 'Agent', 'Build', 'Review', 'Deploy'].map((step, i) => <div key={step} className="flex items-center gap-3 border border-border px-4 py-4"><span className="font-mono text-violet-400">0{i + 1}</span><span>{step}</span></div>)}</div>
      </section>
    </main>
  )
}
