// src/app/core/models/menu-item.model.ts
export interface MenuItem {
  icon: string;
  label: string;
  route: string;
  active?: boolean;
}