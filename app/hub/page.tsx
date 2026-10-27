import Link from 'next/link'
import { ArrowUpRight, Cloud, Code2, Database, Github, Network, ShieldCheck } from 'lucide-react'

export const metadata = {
  title: 'Velclaw Hub',
  description: 'Trung tâm điều hướng hệ sinh thái Velclaw: sản phẩm, tài liệu, tích hợp và dịch vụ.',
}

const groups = [
  { title: 'Products', text: 'Các bề mặt sản phẩm và công cụ làm việc.', links: [{ label: 'Ứng dụng', href: '/apps' }, { label: 'Workspace', href: '/velclaw' }, { label: 'Builder', href: '/builder' }] },
  { title: 'Developer resources', text: 'Tài liệu và điểm bắt đầu cho developer.', links: [{ label: 'Docs', href: '/docs' }, { label: 'API Keys', href: '/api-keys' }, { label: 'MCP', href: '/mcp' }] },
  { title: 'Agent ecosystem', text: 'Năng lực và mở rộng cho workflow của agent.', links: [{ label: 'Skills', href: '/skills' }, { label: 'Plugins', href: '/plugins' }, { label: 'Tasks', href: '/tasks' }] },
]

const integrations = [
  { icon: Github, name: 'GitHub', detail: 'Repositories, branches, pull requests và CI.' },
  { icon: Cloud, name: 'Build & Deploy', detail: 'Quy trình build, preview và phát hành.' },
  { icon: Database, name: 'Data services', detail: 'Nguồn dữ liệu và dịch vụ lưu trữ theo cấu hình dự án.' },
  { icon: ShieldCheck, name: 'Identity & security', detail: 'Quyền truy cập, OAuth và quản lý secrets an toàn.' },
]

export default function HubPage() {
  return (
    <main className="mx-auto min-h-screen max-w-6xl px-5 py-14 text-foreground md:px-8 md:py-20">
      <Link href="/" className="text-sm text-muted-foreground hover:text-foreground">← Velclaw home</Link>
      <header className="mt-12 max-w-3xl"><p className="font-mono text-xs tracking-[0.25em] text-violet-400">ECOSYSTEM / HUB</p><h1 className="mt-5 text-4xl font-semibold tracking-tight md:text-6xl">Một hub.<br /><span className="text-violet-400">Nhiều workflow.</span></h1><p className="mt-5 text-base leading-8 text-muted-foreground">Điều hướng tới các sản phẩm, tài liệu và công cụ của Velclaw từ một trang thống nhất. Hub này là lớp điều hướng; nó không khẳng định mọi tích hợp bên ngoài đã được kết nối hoặc đang hoạt động.</p></header>
      <section className="mt-12 grid gap-4 md:grid-cols-3">
        {groups.map((group, i) => <article key={group.title} className="border border-border bg-card/50 p-6"><p className="font-mono text-xs text-violet-400">0{i + 1} / DIRECTORY</p><h2 className="mt-5 text-xl font-semibold">{group.title}</h2><p className="mt-3 min-h-12 text-sm leading-6 text-muted-foreground">{group.text}</p><div className="mt-5 border-t border-border">{group.links.map(link => <Link key={link.href} href={link.href} className="flex items-center justify-between border-b border-border py-3 text-sm hover:text-violet-400"><span>{link.label}</span><ArrowUpRight size={15} /></Link>)}</div></article>)}
      </section>
      <section className="mt-14"><div className="flex items-center gap-3"><Network className="text-violet-400" size={20} /><h2 className="text-2xl font-semibold">Integration map</h2></div><div className="mt-5 grid gap-3 sm:grid-cols-2">{integrations.map(({ icon: Icon, name, detail }) => <article key={name} className="flex gap-4 border border-border p-5"><Icon className="mt-1 shrink-0 text-violet-400" size={20} /><div><h3 className="font-medium">{name}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{detail}</p></div></article>)}</div></section>
      <div className="mt-12 flex items-center gap-3 border border-border p-5 text-sm text-muted-foreground"><Code2 size={18} className="text-violet-400" /><p>Muốn tích hợp một dịch vụ mới? Bắt đầu từ <Link className="text-foreground underline underline-offset-4" href="/docs">tài liệu</Link> và xác minh cấu hình qua workflow hiện có.</p></div>
    </main>
  )
}
