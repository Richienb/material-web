/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

// Style preference for leading underscores.
// tslint:disable:strip-private-property-underscore

import {addHasRemoveClass, BaseElement} from '@material/mwc-base/base-element';
import {observer} from '@material/mwc-base/observer';
import {MDCSnackbarAdapter} from '@material/snackbar/adapter';
import MDCSnackbarFoundation from '@material/snackbar/foundation';
import {MDCSnackbarCloseEventDetail} from '@material/snackbar/types';
import {html, property, query} from 'lit-element';
import {classMap} from 'lit-html/directives/class-map';

import {accessibleSnackbarLabel} from './accessible-snackbar-label-directive';

const {
  OPENING_EVENT,
  OPENED_EVENT,
  CLOSING_EVENT,
  CLOSED_EVENT,
} = MDCSnackbarFoundation.strings;

export class SnackbarBase extends BaseElement {
  protected mdcFoundation!: MDCSnackbarFoundation;

  protected readonly mdcFoundationClass = MDCSnackbarFoundation;

  @query('.mdc-snackbar') protected mdcRoot!: HTMLElement;

  @query('.mdc-snackbar__label') protected labelElement!: HTMLElement;

  @property({type: Boolean, reflect: true})
  @observer(function(this: SnackbarBase, value: boolean) {
    if (this.mdcFoundation) {
      if (value) {
        this.mdcFoundation.open();
      } else {
        this.mdcFoundation.close(this.reason);
        this.reason = '';
      }
    }
  })
  open = false;

  @observer(function(this: SnackbarBase, value: number) {
    this.mdcFoundation.setTimeoutMs(value);
  })
  @property({type: Number})
  timeoutMs = 5000;

  @observer(function(this: SnackbarBase, value: boolean) {
    this.mdcFoundation.setCloseOnEscape(value);
  })
  @property({type: Boolean})
  closeOnEscape = false;

  @property({type: String}) labelText = '';

  @property({type: Boolean}) stacked = false;

  @property({type: Boolean}) leading = false;

  protected reason = '';

  protected render() {
    const classes = {
      'mdc-snackbar--stacked': this.stacked,
      'mdc-snackbar--leading': this.leading,
    };
    return html`
      <div class="mdc-snackbar ${classMap(classes)}" @keydown="${
        this._handleKeydown}">
        <div class="mdc-snackbar__surface">
          ${accessibleSnackbarLabel(this.labelText, this.open)}
          <div class="mdc-snackbar__actions">
            <slot name="action" @click="${this._handleActionClick}"></slot>
            <slot name="dismiss" @click="${this._handleDismissClick}"></slot>
          </div>
        </div>
      </div>`;
  }

  protected createAdapter(): MDCSnackbarAdapter {
    return {
      ...addHasRemoveClass(this.mdcRoot),
      announce: () => {
        /* We handle announce ourselves with the accessible directive. */
      },
      notifyClosed: (reason: string) => {
        this.dispatchEvent(new CustomEvent<MDCSnackbarCloseEventDetail>(
            CLOSED_EVENT,
            {bubbles: true, cancelable: true, detail: {reason: reason}}));
      },
      notifyClosing: (reason: string) => {
        this.open = false;
        this.dispatchEvent(new CustomEvent(
            CLOSING_EVENT,
            {bubbles: true, cancelable: true, detail: {reason: reason}}));
      },
      notifyOpened: () => {
        this.dispatchEvent(
            new CustomEvent(OPENED_EVENT, {bubbles: true, cancelable: true}));
      },
      notifyOpening: () => {
        this.open = true;
        this.dispatchEvent(
            new CustomEvent(OPENING_EVENT, {bubbles: true, cancelable: true}));
      },
    };
  }

  /** @export */
  show() {
    this.open = true;
  }

  /** @export */
  close(reason = '') {
    this.reason = reason;
    this.open = false;
  }

  protected firstUpdated() {
    super.firstUpdated();
    if (this.open) {
      this.mdcFoundation.open();
    }
  }

  protected _handleKeydown(e: KeyboardEvent) {
    this.mdcFoundation.handleKeyDown(e);
  }

  protected _handleActionClick(e: MouseEvent) {
    this.mdcFoundation.handleActionButtonClick(e);
  }

  protected _handleDismissClick(e: MouseEvent) {
    this.mdcFoundation.handleActionIconClick(e);
  }
}
