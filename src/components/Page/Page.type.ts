import { Result } from "components/PagesList/PagesList.type";

export interface PageState extends Partial<Result> {}

export interface PageMatchParams {
  id: string;
}
