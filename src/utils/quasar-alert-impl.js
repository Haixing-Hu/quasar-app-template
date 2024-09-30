////////////////////////////////////////////////////////////////////////////////
//
//    Copyright (c) 2022 - 2024.
//    Haixing Hu, Xing Lin Digital Tech Co. Ltd.
//
//    All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////
import { Dialog } from 'quasar';
import { AlertImpl, getFontAwesomeDialogIcon } from '@haixing_hu/common-ui';

/**
 * 基于Quasar框架实现的{@link AlertImpl}。
 *
 * @author 胡海星
 */
class QuasarAlertImpl extends AlertImpl {
  /**
   * 显示一个弹出式对话框。
   *
   * @param {string} type
   *     对话框的类型，可取值为：`'info'`, `'success'`, `'warning'`, `'error'`, `'debug'`。
   * @param {string} title
   *     对话框的标题。
   * @param {string} message
   *     对话框中的文字内容。
   * @return {Promise<void>}
   *     一个`Promise`对象，当用户点击对话框的`OK`按键后，可以接着`then`继续下一步操作。
   */
  show(type, title, message) {
    // 根据options中的类别，显示不同的图标和风格
    const icon = getFontAwesomeDialogIcon(type);
    return new Promise((resolve) => {
      Dialog.create({
        title: icon + title,
        message,
        noEscDismiss: true,
        noBackdropDismiss: true,
        noRouteDismiss: false,
        seamless: false,
        html: true,
      }).onOk(resolve);
    });
  }
}

export default QuasarAlertImpl;
