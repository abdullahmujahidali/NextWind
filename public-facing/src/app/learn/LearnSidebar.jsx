'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { overviewItem, refPages, phaseLinks } from './nav'
import { ChevronIcon, MenuIcon, CloseIcon } from './icons'
import { useProgress } from './useProgress'

const STORAGE_KEY = 'learn-sidebar-collapsed'

// One nav row. When collapsed, shows only the icon/number with a hover tooltip.
function NavRow({ href, label, icon: Icon, num, done, active, collapsed, onNavigate }) {
  return (
    <Link
      href={href}
      onClick={onNavigate}
      aria-current={active ? 'page' : undefined}
      title={collapsed ? label : undefined}
      className={`group/row relative flex items-center rounded-lg text-sm transition-colors ${
        collapsed ? 'h-9 w-9 justify-center' : 'gap-3 px-3 py-2'
      } ${
        active
          ? 'bg-primary-100/70 font-medium text-primary-800'
          : 'text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900'
      }`}
    >
      <span className="flex h-5 w-5 flex-none items-center justify-center">
        {Icon ? (
          <Icon className="h-[18px] w-[18px]" />
        ) : (
          <span
            className={`flex h-5 w-5 items-center justify-center rounded-full text-[11px] font-semibold ${
              done
                ? 'bg-primary text-white'
                : active
                  ? 'bg-primary text-white'
                  : 'bg-zinc-100 text-zinc-500 group-hover/row:bg-zinc-200'
            }`}
          >
            {done ? (
              <svg viewBox="0 0 20 20" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="3">
                <path d="M5 10.5 8.5 14 15 6.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            ) : (
              num
            )}
          </span>
        )}
      </span>
      {!collapsed && <span className="truncate">{label}</span>}

      {/* tooltip when collapsed */}
      {collapsed && (
        <span className="pointer-events-none absolute left-full ml-2 z-50 hidden whitespace-nowrap rounded-md bg-zinc-900 px-2 py-1 text-xs text-white shadow-lg group-hover/row:block">
          {label}
        </span>
      )}
    </Link>
  )
}

function GroupLabel({ children, collapsed }) {
  if (collapsed) return <div className="my-2 h-px bg-zinc-100" />
  return (
    <p className="mb-1 mt-4 px-3 text-xs font-semibold uppercase tracking-wide text-zinc-400">
      {children}
    </p>
  )
}

// The list of rows, shared by desktop rail and mobile drawer.
function NavContent({ collapsed, pathname, onNavigate }) {
  const { isDone, ready } = useProgress()
  const isActive = (href) =>
    href === '/learn' ? pathname === '/learn' : pathname === href

  return (
    <nav className="flex flex-col gap-0.5">
      <NavRow {...overviewItem} active={isActive(overviewItem.href)} collapsed={collapsed} onNavigate={onNavigate} />

      <GroupLabel collapsed={collapsed}>Guides</GroupLabel>
      {refPages.map((r) => (
        <NavRow key={r.href} {...r} active={isActive(r.href)} collapsed={collapsed} onNavigate={onNavigate} />
      ))}

      <GroupLabel collapsed={collapsed}>Phases</GroupLabel>
      {phaseLinks.map((p) => (
        <NavRow
          key={p.href}
          href={p.href}
          label={`${p.num}. ${p.label}`}
          num={p.num}
          done={ready && isDone(p.href.split('/').pop())}
          active={isActive(p.href)}
          collapsed={collapsed}
          onNavigate={onNavigate}
        />
      ))}
    </nav>
  )
}

export function LearnSidebar({ mobileOpen, onMobileClose }) {
  const pathname = usePathname()
  const [collapsed, setCollapsed] = useState(false)

  // Restore collapse preference.
  useEffect(() => {
    try {
      setCollapsed(localStorage.getItem(STORAGE_KEY) === '1')
    } catch {}
  }, [])

  const toggle = () => {
    setCollapsed((c) => {
      const next = !c
      try {
        localStorage.setItem(STORAGE_KEY, next ? '1' : '0')
      } catch {}
      return next
    })
  }

  return (
    <>
      {/* Desktop rail — persistent, sticky under the top bar */}
      <aside
        className={`sticky top-14 hidden h-[calc(100vh-3.5rem)] flex-col border-r border-zinc-200 bg-white transition-[width] duration-200 lg:flex ${
          collapsed ? 'w-[64px]' : 'w-60'
        }`}
      >
        {/* Toggle pinned at the TOP so it's always visible, even when the nav
            list overflows. This was the bug: the bottom toggle could scroll off. */}
        <button
          onClick={toggle}
          aria-label={collapsed ? 'Expand menu' : 'Collapse menu'}
          title={collapsed ? 'Expand' : 'Collapse'}
          className={`flex flex-none items-center border-b border-zinc-100 px-3 py-2.5 text-sm font-medium text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-900 ${
            collapsed ? 'justify-center' : 'justify-between'
          }`}
        >
          {!collapsed && <span>Menu</span>}
          <ChevronIcon className={`h-5 w-5 transition-transform ${collapsed ? '' : 'rotate-180'}`} />
        </button>

        <div className="flex-1 overflow-y-auto overflow-x-hidden p-2.5">
          <NavContent collapsed={collapsed} pathname={pathname} />
        </div>
      </aside>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/30" onClick={onMobileClose} />
          <div className="absolute inset-y-0 left-0 flex w-72 max-w-[85vw] flex-col bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-zinc-100 px-4 py-3">
              <span className="font-semibold text-zinc-900">Learn to code</span>
              <button
                onClick={onMobileClose}
                aria-label="Close menu"
                className="flex h-8 w-8 items-center justify-center rounded-full text-zinc-400 hover:bg-zinc-100 hover:text-zinc-700"
              >
                <CloseIcon className="h-5 w-5" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-2.5">
              <NavContent collapsed={false} pathname={pathname} onNavigate={onMobileClose} />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export { MenuIcon }
