import * as Promise from 'bluebird';

export interface IDialogTestStep {
    execute(): Promise<any>
}
