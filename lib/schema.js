import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const patients = sqliteTable("patients", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  patientNumber: text("patient_number").notNull(),
  name: text("name").notNull(),
  age: integer("age"),
  sex: text("sex"),
  mobile: text("mobile"),
  address: text("address"),
  createdAt: text("created_at"),
});

export const prescriptions = sqliteTable("prescriptions", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  patientId: integer("patient_id").notNull(),
  date: text("date").notNull(),
  medicines: text("medicines"),
  notes: text("notes"),
});

export const treatments = sqliteTable("treatments", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  patientId: integer("patient_id").notNull(),
  toothNumber: text("tooth_number"),
  procedure: text("procedure"),
  sittingNumber: integer("sitting_number"),
  totalSittings: integer("total_sittings"),
  amount: integer("amount"),
  date: text("date"),
});

export const billing = sqliteTable("billing", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  patientId: integer("patient_id").notNull(),
  items: text("items"),
  total: integer("total"),
  paid: integer("paid"),
  balance: integer("balance"),
  mode: text("mode"),
  date: text("date"),
});