import ContentInstancesProvider from "../content/instances/ContentInstancesProvider";
import Reader from "../Reader";
import Game from "./Game";

export default class GameContentInstancesProvider<TContentInstance> implements ContentInstancesProvider<TContentInstance> {
    constructor(private gameReader: Reader<Game>) { }
    async get(contentName: string): Promise<TContentInstance[]> {
        const game = await this.gameReader.read();

        const contentInstances = game.objects.filter(x => x.contentName == contentName).map(x => x as TContentInstance);

        return contentInstances;
    }
}