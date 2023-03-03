import ContentInstance from "../content/instances/ContentInstance";
import ContentInstancesProvider from "../content/instances/ContentInstancesProvider";
import GameReader from "../Reader";

export default class GameContentInstancesProvider implements ContentInstancesProvider {
    constructor(private gameReader: GameReader) { }
    async get(contentName: string): Promise<ContentInstance[]> {
        const game = await this.gameReader.read();

        const contentInstances = game.objects.filter(x => x.contentName == contentName);

        return contentInstances;
    }
}