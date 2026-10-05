# RPP-ERP: Smart Printing Press Management System

A modern, smart, high-performance, and responsive Printing Press Enterprise Resource Planning (ERP) suite built using **Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS**, **Lucide Icons**, **Prisma ORM**, and **Recharts**.

---

## 🏗️ Architecture & Modules Overview

### 1. Complete Sidebar Navigation Structure
The sidebar is strictly structured with the 9 required enterprise modules:
- 🏠 **Home (Dashboard)** (`/`): Real-time business overview (Active jobs, Total billed, Dues receivable), Live Production Tracker with machine impression telemetry, and Daily Financial Summary widget.
- 📋 **Order List** (`/orders`): Advanced multi-facet filtering (Search, Status tabs, Priority levels), dynamic visual stage tracker (`Graphic Design -> CTP Plate -> Offset Printing -> Lamination -> Die-Cutting -> Binding -> Delivery`), invoice modal and job ticket print view.
- 👤 **Customer Management** (`/customers`): CRM panel with balance metrics (Total billed, Total paid, Balance due, Credit limit usage gauge), customer card image avatars, group filtering (`VIP`, `Wholesale`, `Regular`, `Retail`), and bulk WhatsApp & SMS templates.
- ➕ **New Order Form** (`/orders/new`): Dynamic multi-item creation (Size, Paper Type, Material, Quantity, Price) and customizable Working Process pipeline assignment with automated machine routing.
- ⚙️ **Machine Control & Production Tracking** (`/production`): Real-time job assignments, live impression counters with quick increment tools, CTP plate production exposure logs, and stage status progression (`QUEUED -> IN_PROGRESS -> COMPLETED`).
- 👥 **HRM & Employees** (`/hrm`): Employee profiles, Daily press duty attendance logs (Check-in, Check-out, status), and Payroll salary disbursement ledger.
- 📇 **Directory** (`/directory`): Contact & Vendor management for paper mills, process inks, CTP plates, and outsource binding partners with ratings and balance payables.
- 📊 **Reports Module** (`/reports`): Dedicated Reports Dashboard with filtered date-ranges (Daily, Weekly, Monthly, Custom) covering all 4 core analytical reports:
  1. **Monthly Order Report**: Orders received, completed vs pending, top print categories, and billing totals.
  2. **Production Report**: Total jobs processed, stage-wise bottleneck analysis, completed vs delayed jobs, and wastage rate.
  3. **Machine Expense Report**: Machine-wise electricity/running cost, maintenance expenses, plate costs, and total machine operational overhead.
  4. **Financial Reports**: Gross revenue, total collections, total expenses, and net profit margin with interactive Recharts graphs.
- 💰 **Daily Collection & Expense** (`/finance`): Cash desk management featuring:
  - **Daily Collection Tracker**: Cash, Bank, Mobile Banking (bKash/Nagad) entries against Order Bills or Customer dues.
  - **Daily Expense Manager**: Categorized expenses (Paper Purchase, Ink/Chemicals, Utility Bills, Maintenance, Tea/Office Snacks, Salaries).
  - **Daily Closing Summary Widget**: Auto-calculated formula `(Total Opening Balance + Total Daily Collection) - Total Daily Expense = Closing Cash Hand`.

---

## 🗄️ Database Schema (Prisma ORM)

Located in `prisma/schema.prisma`:
- **`Customer`**: Client profile, credit limit, total billed, paid, balance due.
- **`Order` & `OrderItem`**: Multi-item job specifications, pricing, delivery dates, notes.
- **`ProductionProcess`**: Step name, assigned machine, operator, status (`QUEUED`, `IN_PROGRESS`, `PAUSED`, `COMPLETED`, `DELAYED`), target and actual impressions, plate counts, wastage, logs.
- **`MachineControl`**: Offset presses (Heidelberg SM-74, Komori Lithrone, Roland 700), CTP setter (Agfa Avalon), Paper cutters (Polar 115), hourly rate, kWh electricity cost, impressions.
- **`DailyTransaction`**: Type (`COLLECTION` / `EXPENSE`), category, payment method (`CASH`, `BANK_TRANSFER`, `BKASH`, `NAGAD`, `CHEQUE`), order/customer references.
- **`Employee`, `Attendance`, `Payroll`**: HRM staff records, shift check-ins, monthly salary payments.
- **`DirectoryContact`**: Vendors, paper suppliers, balance payable.
- **`ReportSummary`**: Aggregated performance metrics.

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Generate Prisma Client & Sync Database
```bash
npx prisma generate
npx prisma db push
```

### 3. Seed Realistic Printing Press Records
```bash
node prisma/seed.js
```

### 4. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Production Build
```bash
npm run build
npm start
```
