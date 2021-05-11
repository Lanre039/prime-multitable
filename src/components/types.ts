export interface IFormProps {
  formInput: string;
  setFormInput: React.Dispatch<React.SetStateAction<string>>;
  setPrimeNo: React.Dispatch<React.SetStateAction<number[]>>;
}
export interface ITableProps {
  primeNo: number[];
}
