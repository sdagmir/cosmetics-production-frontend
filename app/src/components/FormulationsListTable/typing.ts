export interface IFormulationsTableRow {
    number: number; 
    name: string; 
    status: string; 
    creationDate: string; 
    completionDate?: string; 
    adverseEffectsCount: number; 
  }
  
  export interface IFormulationsTableProps {
    rows: IFormulationsTableRow[]; // Список строк таблицы.
  }
  