export interface Startable {
    isRunning: boolean;
    start():void;
    stop():void;
}