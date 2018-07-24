export class GetData<T> {

  error:number;
  message:string;
  data : T;


}

interface Base<T> {
  new(): T
}


export interface GetDataImpl<T> {

  error:number;
  message:string;
  user :  T;
}



export interface ConditionUse{
  id: number,
  val:boolean;
  text: string
}


