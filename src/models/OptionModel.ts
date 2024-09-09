export default interface OptionModel {
    showCard?: { type: boolean, default: true };
    columns: Array<{ key: string, name?: string | null, filter: boolean, sort?: boolean, width?: string }>;
    data: Array<any>;
    colors?: { headRow?: string, oddRow?: string, evenRow?: string, font?: string, fontHeaderTable?: string, border?: string, card?: string };
}