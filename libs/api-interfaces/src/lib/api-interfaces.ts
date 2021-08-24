export interface Message {
  message: string;
}

export interface BaseEntity {
    id : string | null;
}

export interface Data extends BaseEntity {
    title: string;
    description: string;
}