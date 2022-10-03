export interface Chapter {
  id: number;
  revelation_place: string;
  name_simple: string;
  name_complex: string;
  name_arabic: string;
  verses_count: number;
  translated_name: {
    language_name: string | undefined;
    name: string | undefined;
  };
}

export interface Reciter {
  id: string;
  name: string;
  Server: string;
  rewaya: string;
  count: string;
  letter: string;
  suras: string;
}
