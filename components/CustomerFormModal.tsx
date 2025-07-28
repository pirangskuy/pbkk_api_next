"use client"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from "react"

interface Customer {
  id?: string
  customer_name: string
  alamat: string
  no_hp?: string
}

interface Props {
  customer?: Customer
  trigger: React.ReactNode
  onSubmit: (data: Customer) => void
}

export default function CustomerFormModal({ customer, trigger, onSubmit }: Props) {
  const [open, setOpen] = useState(false)
  const [form, setForm] = useState<Customer>({
    customer_name: customer?.customer_name || "",
    alamat: customer?.alamat || "",
    no_hp: customer?.no_hp || "",
    id: customer?.id || "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
    onSubmit(form)
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{customer ? "Edit Customer" : "Tambah Customer"}</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 py-2">

          <Input
            name="customer_name"
            placeholder="Nama"
            value={form.customer_name}
            onChange={handleChange}
          />
          <Input
            name="alamat"
            placeholder="Alamat"
            value={form.alamat}
            onChange={handleChange}
          />
          <Input
            name="no_hp"
            placeholder="No Handphone"
            value={form.no_hp}
            onChange={handleChange}
          />
        </div>
        <DialogFooter>
          <Button onClick={handleSubmit}>
            {customer ? "Simpan Perubahan" : "Tambah"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
