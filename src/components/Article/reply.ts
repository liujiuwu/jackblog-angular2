import { Component, EventEmitter } from 'angular2/core'
import { ReplyModel } from '../../models'
import { FormatDatePipe } from '../../utils/pipes'

@Component({
	selector: 'reply',
	inputs: ['replys', 'k'],
	outputs: ['showReplyEvent'],
	pipes: [FormatDatePipe],
	template: `
	<div class="reply-list">
	  <div *ngFor="#reply of replys, #i = index" class="reply-item">
	    <p class="reply-content">
	      <a class="reply-user link-light">{{reply.user_info.nickname}}</a>：
	      {{reply.content}}
	    </p>
	    <div class="reply-footer text-right">
	      <a class="reply" href="javascript:;" (click)="showReply(k,reply.user_info.nickname)" >回复</a>
	      <span class="reply-time pull-left">{{ reply.created | formatDate }}</span>
	    </div>
	  </div>
	</div>
	`
})
export default class ReplyComponent {
	replys: ReplyModel
	k:number
	showReplyEvent: EventEmitter<any> = new EventEmitter<any>()
	showReply(k,nickname){
		this.showReplyEvent.next({index:k,nickname:nickname})
	}
}