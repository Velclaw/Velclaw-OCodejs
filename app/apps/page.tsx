import Link from 'next/link'
import { ArrowUpRight, Blocks, BookOpen, Bot, Boxes, Code2, GitBranch, Puzzle } from 'lucide-react'

export const metadata = {
  title: 'Ứng dụng Velclaw',
  description: 'Danh mục ứng dụng và công cụ trong hệ sinh thái Velclaw.',
}

const apps = [
  { name: 'Builder', category: 'DEVELOPMENT', description: 'Tạo, sửa và preview ứng dụng trong trình duyệt.', href: '/builder', icon: Code2, status: 'Available' },
  { name: 'Workspace', category: 'WORKSPACE', description: 'Quản lý project, tác vụ, repository và quy trình agent.', href: '/velclaw', icon: Boxes, status: 'Available' },
  { name: 'Deploy', category: 'DELIVERY', description: 'Truy cập công cụ build và luồng triển khai ứng dụng.', href: '/deploy', icon: GitBranch, status: 'Available' },
  { name: 'Skills', category: 'AGENTS', description: 'Khám phá năng lực tái sử dụng cho agent.', href: '/skills', icon: Bot, status: 'Sign-in required' },
  { name: 'Plugins', category: 'INTEGRATIONS', description: 'Mở rộng workspace bằng các tích hợp.', href: '/plugins', icon: Puzzle, status: 'Available' },
  { name: 'MCP', category: 'INTEGRATIONS', description: 'Kết nối công cụ và ngữ cảnh cho agent.', href: '/mcp', icon: Blocks, status: 'Available' },
  { name: 'Docs', category: 'LEARN', description: 'Tài liệu hướng dẫn và thông tin kỹ thuật.', href: '/docs', icon: BookOpen, status: 'Available' },
]

export default function AppsPage() {
  return (
    <main className="mx-auto min-h-screen max-w-6xl px-5 py-14 text-foreground md:px-8 md:py-20">
      <Link href="/" className="text-sm text-muted-foreground hover:text-foreground">← Velclaw home</Link>
      <header className="mt-12 max-w-3xl"><p className="font-mono text-xs tracking-[0.25em] text-violet-400">PRODUCT DIRECTORY</p><h1 className="mt-5 text-4xl font-semibold tracking-tight md:text-6xl">Ứng dụng <span className="text-violet-400">Velclaw.</span></h1><p className="mt-5 text-base leading-8 text-muted-foreground">Một điểm vào cho các công cụ phát triển, tích hợp và năng lực agent. Trạng thái bên dưới mô tả yêu cầu truy cập của route, không phải cam kết uptime của dịch vụ.</p></header>
      <section className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {apps.map(({ name, category, description, href, icon: Icon, status }, index) => <Link key={name} href={href} className="group flex min-h-56 flex-col border border-border bg-card/50 p-6 transition-colors hover:border-violet-400/60 hover:bg-violet-500/[0.04]">
          <div className="flex items-center justify-between"><Icon size={22} className="text-violet-400" /><span className="font-mono text-xs text-muted-foreground">0{index + 1}</span></div>
          <p className="mt-6 font-mono text-[10px] tracking-[0.18em] text-muted-foreground">{category}</p><h2 className="mt-2 text-xl font-semibold">{name}</h2><p className="mt-2 flex-1 text-sm leading-6 text-muted-foreground">{description}</p>
          <div className="mt-5 flex items-center justify-between border-t border-border pt-4 text-xs"><span className="text-muted-foreground">{status}</span><span className="inline-flex items-center gap-1 text-violet-400">Mở trang <ArrowUpRight size={14} /></span></div>
        </Link>)}
      </section>
      <p className="mt-8 text-xs leading-6 text-muted-foreground">Một số khu vực có thể yêu cầu đăng nhập hoặc quyền tích hợp. Không hiển thị secrets trong danh mục công khai.</p>
    </main>
  )
}
