## react-whatsapp-chat-widget

> This is a Whatsapp Chat Widget where you can use like a professional chat plugin in your react project with full customization of your own.

[![npm version](https://badge.fury.io/js/react-whatsapp-chat-widget.svg)](https://www.npmjs.com/package/react-whatsapp-chat-widget) &bull; [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/proficientdesigners/react-whatsapp-chat-widget/blob/master/LICENSE)

## Getting Started

```bash
npm install react-whatsapp-chat-widget
# or
yarn add react-whatsapp-chat-widget
```

## Usage

```jsx
import React from "react";

import WhatsAppWidget from "react-whatsapp-chat-widget";
import "react-whatsapp-chat-widget/index.css";

const ReactApp = () => {
	return (
		<WhatsAppWidget
			phoneNo="+123 12345 00000"
			position="right"
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
		/>
	);
};

export default ReactApp;
```

⚠️ The `phoneNo` is a full phone number in international format. Omit any zeroes, brackets, or dashes when adding the phone number in international format.

Example: `919884098840` where 91 is the International code for India.


| Property        | Type             | Default                                            | Description                                                                                                                                      |
| --------------- | ---------------- | -------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| phoneNo         | `string`         | `''`                                               | WhatsApp [international no.](https://faq.whatsapp.com/general/contacts/how-to-add-an-international-phone-number) which will receive the message. |
| position        | `string`         | `'right'`                                          | Position the widget to left bottom or right bottom (Enum `'left', 'right'`)                                                                      |
| autoOpen        | `boolean`        | `'false'`                                          | Open the chat box automatically                                                                                                                  |
| autoOpenTimer   | `string, number` | `3000` in milliseconds                             | Set timer to open the chat box automatically                                                                                                     |
| iconSize        | `string`         | `'52'`                                             | Fix the size of the chat icon                                                                                                                    |
| iconColor       | `string`         | `'rgb(37, 211, 102)'`                              | Chat icon color (`HexCode, RGB` format)                                                                                                          |
| iconBgColor     | `string`         | `'#ffffff'`                                        | Chat icon background color (`HexCode, RGB` format)                                                                                               |
| headerIcon      | `string`         | `reactNode` svg icon                               | Profile icon in the header as a profile image or use the default svg icon (`image uri` see the example above)                                    |
| headerIconColor | `string`         | `'rgb(100, 100, 100)'`                             | Profile icon color in the header `(this works only when default svg icon is used)`                                                               |
| headerTxtColor  | `string`         | `'rgb(255, 255, 255)'`                             | Header text color                                                                                                                                |
| headerBgColor   | `string`         | `'rgb(7, 94, 84)'`                                 | Header background color                                                                                                                          |
| headerTitle     | `string`         | `'Customer Support'`                               | Header title                                                                                                                                     |
| headerCaption   | `string`         | `Online`                                           | Header caption                                                                                                                                   |
| bodyBgColor     | `string`         | `'rgb(227, 220, 213)'`                             | Chat body background color                                                                                                                       |
| chatPersonName  | `string`         | `'Support'`                                        | Person name in the chat bubble                                                                                                                   |
| chatMessage     | `reactNode`      | `<>Hi there 👋 <br /><br /> How can I help you?</>` | Message text in the chat bubble                                                                                                                  |
| footerBgColor   | `string`         | `'rgb(255, 255, 255)'`                             | Footer background color                                                                                                                          |
| btnBgColor      | `string`         | `'rgb(79, 206, 93)'`                               | Start chat button background color                                                                                                               |
| btnTxtColor     | `string`         | `'rgb(255, 255, 255)'`                             | Start chat button text color                                                                                                                     |


## License

[MIT](https://github.com/proficientdesigners/react-whatsapp-chat-widget/blob/master/LICENSE)

## Created by

[proficientdesigners.com](https://proficientdesigners.com/)