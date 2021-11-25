## react-whatsapp-chat-widget

[![npm version](https://badge.fury.io/js/react-whatsapp-chat-widget.svg)](https://www.npmjs.com/package/react-whatsapp-chat-widget) &nbsp; [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/proficientdesigners/react-whatsapp-chat-widget/blob/master/LICENSE)

> This is a Whatsapp Chat Widget for react where you can use as a plugin in your react project with full customization of your own.

### Getting Started

```bash
npm install react-whatsapp-chat-widget
# or
yarn add react-whatsapp-chat-widget
```

> ⚠️ If you get "Uncaught SyntaxError: Cannot use import statement outside a module" when importing ECMAScript 6, then your app must be SSR enabled like in NextJS. To resolve the issue in nextJS visit [here](https://nextjs.org/docs/advanced-features/dynamic-import#with-no-ssr)

### For demo

Visit our [site](https://www.proficientdesigners.com/ "Proficient Designers") to see react-whatsapp-chat-widget live performance

### Usage

```jsx
import React from "react";

import WhatsAppWidget from "react-whatsapp-chat-widget";
import "react-whatsapp-chat-widget/index.css";

const ReactApp = () => {
	return (
		<WhatsAppWidget
			phoneNo="919884098840"
			position="right"
			widgetWidth="300px"
			widgetWidthMobile="260px"
			autoOpen={true}
			autoOpenTimer={5000}
			messageBox={true}
			messageBoxTxt="Hi Team, is there any related service available ?"
			iconSize="40"
			iconColor="white"
			iconBgColor="tomato"
			headerIcon="https://proficientdesigners.in/wp-content/themes/pd/img/logo-new.png"
			headerIconColor="pink"
			headerTxtColor="black"
			headerBgColor="tomato"
			headerTitle="John Doe"
			headerCaption="Online"
			bodyBgColor="#bbb"
			chatPersonName="Support"
			chatMessage={<>Hi there 👋 <br /><br /> How can I help you?</>}
			footerBgColor="#999"
			btnBgColor="yellow"
			btnTxtColor="black"
			btnTxt="Start Chat"
		/>
	);
};

export default ReactApp;
```
 

⚠️ The `phoneNo` is a full phone number in international format. Omit any zeroes, brackets, or dashes when adding the phone number in international format.

Example: `919884098840` where 91 is the International code for India.


| Property          | Type             | Default                                            | Description                                                                                                                                      |
| ----------------- | ---------------- | -------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| phoneNo           | `string`         | `''`                                               | WhatsApp [international no.](https://faq.whatsapp.com/general/contacts/how-to-add-an-international-phone-number) which will receive the message. |
| position          | `string`         | `'right'`                                          | Position the widget to left bottom or right bottom (Enum `'left', 'right'`)                                                                      |
| widgetWidth       | `string`         | `'300px'`                                          | Width of the entire widget for devices more than `'360px'` width                                                                                 |
| widgetWidthMobile | `string`         | `'260px'`                                          | Width of the entire widget for devices less than `'360px'` width like mobile devices                                                             |
| autoOpen          | `boolean`        | `'false'`                                          | Open the chat box automatically                                                                                                                  |
| autoOpenTimer     | `string, number` | `3000` in milliseconds                             | Set timer to open the chat box automatically                                                                                                     |
| messageBox        | `boolean`        | `false`                                            | Message box is hidden by default, so you can enable it if needed                                                                                 |
| messageBoxTxt     | `string`         | `''`                                               | If Message box is enabled, you can put the default text for the user to start up with the conversation                                           |
| iconSize          | `string`         | `'52'`                                             | Fix the size of the chat icon                                                                                                                    |
| iconColor         | `string`         | `'rgb(37, 211, 102)'`                              | Chat icon color (`HexCode, RGB` format)                                                                                                          |
| iconBgColor       | `string`         | `'#ffffff'`                                        | Chat icon background color (`HexCode, RGB` format)                                                                                               |
| headerIcon        | `string`         | `reactNode` svg icon                               | Profile icon in the header as a profile image or use the default svg icon (`image uri` see the example above)                                    |
| headerIconColor   | `string`         | `'rgb(100, 100, 100)'`                             | Profile icon color in the header `(this works only when default svg icon is used)`                                                               |
| headerTxtColor    | `string`         | `'rgb(255, 255, 255)'`                             | Header text color                                                                                                                                |
| headerBgColor     | `string`         | `'rgb(7, 94, 84)'`                                 | Header background color                                                                                                                          |
| headerTitle       | `string`         | `'Customer Support'`                               | Header title                                                                                                                                     |
| headerCaption     | `string`         | `Online`                                           | Header caption                                                                                                                                   |
| bodyBgColor       | `string`         | `'rgb(227, 220, 213)'`                             | Chat body background color                                                                                                                       |
| chatPersonName    | `string`         | `'Support'`                                        | Person name in the chat bubble                                                                                                                   |
| chatMessage       | `reactNode`      | `<>Hi there 👋 <br /><br /> How can I help you?</>` | Message text in the chat bubble                                                                                                                  |
| footerBgColor     | `string`         | `'rgb(255, 255, 255)'`                             | Footer background color                                                                                                                          |
| btnBgColor        | `string`         | `'rgb(79, 206, 93)'`                               | Start chat button background color
| btnTxt        | `string`         | `'Start Chat'`                               | Button Text
| btnTxtColor       | `string`         | `'rgb(255, 255, 255)'`                             | Start chat button text color                                                                                                                     |


### License

[MIT](https://github.com/proficientdesigners/react-whatsapp-chat-widget/blob/master/LICENSE)

### Created by

![Proficient Designers](https://download.proficientdesigners.in/favicon-32x32.png "Proficient Designers")
[proficientdesigners.com](https://proficientdesigners.com/)
