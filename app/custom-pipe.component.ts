import {Component} from 'angular2/core'
import {SummaryPipe} from './summary.pipe'

@Component({
    selector: 'custom-pipe',
    template: `
        {{post.body | summary}}
        `,
    pipes: [SummaryPipe]
})
export class CustomPipeComponent {
    post = {
        body: `
            Iuerbglkjfdnglkfdsjbgl;kgjnhesrpoiguhsep;orgdslkf;jgnhs;kdjfngls;kdfjgs;dfglks;djgfslkdjg;lsdfkjg
        `
    }
}