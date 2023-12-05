import React, { useState } from "react";
export default function Footer(props) {
	const footerBgColor = props.footerBgColor
			? props.footerBgColor
			: "rgb(245, 245, 245)",
		btnTxtColor = props.btnTxtColor ? props.btnTxtColor : "rgb(255, 255, 255)",
		btnTxt = props.btnTxt ? props.btnTxt : "Start Chat",
		btnBgColor = props.btnBgColor ? props.btnBgColor : "rgb(79, 206, 93)",
		phoneNo = props.phoneNo ? props.phoneNo : false,
		groupID = props.groupID ? props.groupID : false,
		placeholder = props.placeholder ? props.placeholder : "Type a message..";

	const [message, setMessage] = useState(
		props.messageBoxTxt ? encodeURI(props.messageBoxTxt) : ""
	);

	const phoneURL = `https://wa.me/${phoneNo}?text=${message}`;
	const groupURL = `https://chat.whatsapp.com/${groupID}`;

	return /*#__PURE__*/ React.createElement(
		"div",
		{
			key: props,
			className: "whatsapp_widget_footer",
			style: {
				backgroundColor: footerBgColor,
			},
		},
		props.messageBox &&
			/*#__PURE__*/ React.createElement(
				"div",
				null,
				/*#__PURE__*/ React.createElement("input", {
					type: "text",
					onChange: (e) => setMessage(encodeURI(e.target.value)),
					className: "whatsapp_widget_input",
					placeholder: placeholder,
					defaultValue: props.messageBoxTxt,
				})
			),
		/*#__PURE__*/ React.createElement(
			"a",
			{
				/* href: `https://wa.me/${phoneNo}?text=${message}`, */
				/* If phoneNo is empty, use the groupURL, and if the groupURL is empty, alert the user saying that no number / group is set */
				href: !phoneNo ? groupURL : phoneURL,
				onClick: (e) => {
					if (!groupURL) {
						e.preventDefault();
						return alert(
							"There is no phone or group identifier added to this widget!"
						);
					}
				},
				target: "_blank",
				className: "whatsapp_widget_footer_btn",
				rel: "noreferrer",
				style: {
					color: btnTxtColor,
					backgroundColor: btnBgColor,
				},
			},
			btnTxt
		)
	);
}
