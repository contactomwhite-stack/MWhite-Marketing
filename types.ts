export interface PlanFeature {
  text: string;
  included: boolean;
}

export interface Plan {
  id: string;
  name: string;
  subtitle: string;
  price: string;
  period: string;
  features: PlanFeature[];
  highlight?: boolean;
  ctaText: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  price: string;
}

export interface NavItem {
  label: string;
  href: string;
}
