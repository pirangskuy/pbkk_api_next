'use client'

import { AppSidebar } from "@/components/app-sidebar"
import BarangList from "@/components/barang-list"
import { SiteHeader } from "@/components/site-header"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function UserPage() {
  return (
    <SidebarProvider
      style={{
        "--sidebar-width": "calc(var(--spacing) * 72)",
        "--header-height": "calc(var(--spacing) * 12)",
      } as React.CSSProperties}
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <div className="flex flex-col gap-4 p-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold">Daftar Barang</h1>
                <p className="text-muted-foreground text-sm">
                  Berikut adalah daftar barang yang diambil dari API Laravel.
                </p>
              </div>
              <Button variant="default" size="sm">
                + Tambah Barang
              </Button>
            </div>

            <Card className="shadow-md border rounded-xl">
              <CardHeader>
                <CardTitle className="text-lg">Data Barang</CardTitle>
              </CardHeader>
              <CardContent>
                <BarangList />
              </CardContent>
            </Card>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}