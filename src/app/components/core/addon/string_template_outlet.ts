import { Directive, TemplateRef, EmbeddedViewRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
	selector: '[appStringTemplateOutlet]',
})
export class AppStringTemplateOutletDirective { 
	private isTemplate: boolean;
	private inputTemplate: TemplateRef<void> | null = null;
	private inputViewRef: EmbeddedViewRef<void> | null = null;
	private defaultViewRef: EmbeddedViewRef<void> | null = null;

	constructor(private viewContainer:ViewContainerRef, private defaultTemplate: TemplateRef<void>) {}

	@Input()
	set appStringTemplateOutlet(value: string | TemplateRef<void>) {
		debugger
		if (value instanceof TemplateRef) {
			this.isTemplate = true;
			this.inputTemplate = value;
		} else {
			this.isTemplate = false;
		}
		this.updateView();
	}

	updateView(): void {
		if (!this.isTemplate) {
			/** use default template when input is string **/
			if (!this.defaultViewRef) {
				this.viewContainer.clear();
				this.inputViewRef = null;
				if(this.defaultTemplate) {
					this.defaultViewRef = this.viewContainer.createEmbeddedView(this.defaultTemplate);
				}
			}
		} else {
			/** use input template when input is templateRef **/
			if (!this.inputViewRef) {
				this.viewContainer.clear();
				this.defaultViewRef = null;
				if (this.inputTemplate) {
					this.inputViewRef = this.viewContainer.createEmbeddedView(this.inputTemplate);
				}
			}
		}
	}
}