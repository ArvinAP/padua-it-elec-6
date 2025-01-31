import { COMPILER_OPTIONS, Component } from '@angular/core';

@Component({
    selector: 'post-list',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.css'] 
})

export class PostListComponent {

    posts = [
        {title: '1st title', content: '1st content'},
        {title: '1st title', content: '1st content'},
        {title: '1st title', content: '1st content'}
        
    ]
}