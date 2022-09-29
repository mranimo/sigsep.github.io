(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{304:function(e,t,r){"use strict";r.r(t);var i=r(13),a=Object(i.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"tutorials-and-overview-talks"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tutorials-and-overview-talks"}},[e._v("#")]),e._v(" Tutorials and Overview Talks")]),e._v(" "),t("h2",{attrs:{id:"aes-virtual-symposium-2020-current-trends-in-audio-source-separation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#aes-virtual-symposium-2020-current-trends-in-audio-source-separation"}},[e._v("#")]),e._v(" AES Virtual Symposium 2020: Current Trends in Audio Source Separation")]),e._v(" "),t("p",[t("strong",[e._v("Presenters:")]),e._v(" "),t("a",{attrs:{href:"https://www.faroit.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("Fabian-Robert Stöter"),t("OutboundLink")],1),e._v(" and "),t("a",{attrs:{href:"https://uhlich.imfast.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("Stefan Uhlich"),t("OutboundLink")],1)]),e._v(" "),t("iframe",{attrs:{width:"560",height:"315",src:"https://www.youtube.com/embed/AB-F2JmI9U4",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}}),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"/AES2020_CurrentTrendsInSourceSeparation.pdf"}},[e._v("Slides (pdf)")])]),e._v(" "),t("li",[t("a",{attrs:{href:"https://www.youtube.com/watch?v=AB-F2JmI9U4",target:"_blank",rel:"noopener noreferrer"}},[e._v("Video"),t("OutboundLink")],1)])]),e._v(" "),t("h2",{attrs:{id:"eusipco-2019-deep-learning-for-music-separation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#eusipco-2019-deep-learning-for-music-separation"}},[e._v("#")]),e._v(" EUSIPCO 2019: Deep learning for music separation")]),e._v(" "),t("p",[t("strong",[e._v("Presenters:")]),e._v(" "),t("a",{attrs:{href:"https://www.lirmm.fr/users/utilisateurs-lirmm/antoine-liutkus",target:"_blank",rel:"noopener noreferrer"}},[e._v("Antoine Liutkus"),t("OutboundLink")],1),e._v(" and "),t("a",{attrs:{href:"https://www.faroit.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("Fabian-Robert Stöter"),t("OutboundLink")],1)]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://sigsep.github.io/eusipco2019_tutorial",target:"_blank",rel:"noopener noreferrer"}},[e._v("Slides"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://colab.research.google.com/drive/1Zo6iSPIi6SjOAL7wg8yzVWkS9mjLgjI-",target:"_blank",rel:"noopener noreferrer"}},[e._v("Notebook 1: Introduction to Music Unmixing"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://colab.research.google.com/drive/1tYL35_0M3TobYv0eT8Uc_H4JO2JUfi4K",target:"_blank",rel:"noopener noreferrer"}},[e._v("Notebook 2: Training"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://colab.research.google.com/drive/1mijF0zGWxN-KaxTnd0q6hayAlrID5fEQ",target:"_blank",rel:"noopener noreferrer"}},[e._v("Notebook 3: Test/Inference"),t("OutboundLink")],1)])]),e._v(" "),t("p",[e._v("In this tutorial, we present the recent state of the art on the topic of music separation, which is a cornerstone problem for many applications in the entertainment industry. The particularity of this tutorial will be to approach the topic from both, a theoretical perspective, as well as an interactive demonstration regarding how to implement the described ideas in practice. In a first introductory part, we will summarize mandatory signal processing concepts and will review the model-based methods that were proposed in the last 40 years. This notably includes sinusoidal modeling, nonnegative matrix factorization, or kernel methods. Then, we will overview the related datasets that were proposed, as well as the metrics used for evaluation. From a practical perspective, we will see how to browse and use data in Python. In the second part, we will present deep neural networks, and most particularly the models and methods that are adequate for time series with long-term structures as in music. This involves a quick crash course on DNN and dynamic models (LSTM, CNN and wavenet), and a recap of the related vocabulary: datasets, samples, epoch, batch, loss, gradient, generative, discriminative, adversarial, etc. In the third part, we will show the importance of design and will bring a basic LSTM separation model to state-of-the-art performance. We will analyze the impact of many design choices: input representation, dimensionality reduction, depth, hidden size, context length, skip connections. This tutorial is intended to be an introduction of this topic for Ph.D. students and engineers, explaining how to obtain state of the art performance in audio separation, along with the required technical background. Second, it will hopefully be of interest to researchers wondering how to do actual investigations on audio with DNNs, without being just users of high-level black-box systems.")]),e._v(" "),t("h2",{attrs:{id:"ismir-2018-music-source-separation-with-dnns-making-it-work"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ismir-2018-music-source-separation-with-dnns-making-it-work"}},[e._v("#")]),e._v(" ISMIR 2018: "),t("em",[e._v('"Music Source Separation with DNNs, Making it work"')])]),e._v(" "),t("p",[t("strong",[e._v("Presenters:")]),e._v(" "),t("a",{attrs:{href:"https://www.lirmm.fr/users/utilisateurs-lirmm/antoine-liutkus",target:"_blank",rel:"noopener noreferrer"}},[e._v("Antoine Liutkus"),t("OutboundLink")],1),e._v(" and "),t("a",{attrs:{href:"https://www.faroit.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("Fabian-Robert Stöter"),t("OutboundLink")],1)]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://sigsep.github.io/ismir2018_tutorial/index.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Slides"),t("OutboundLink")],1)])]),e._v(" "),t("p",[e._v("Abstract: This tutorial concerns music source separation, that we also call music demixing, with a resolute focus on methods using DNN.\nIn an introductory part, we will motivate the tutorial by explaining how music separation with DNN emerged with data-driven methods coming from machine-learning or image processing communities. This comes with machine-learning tricks to make methods work in practice. Meanwhile, many audio processing good practices are often forgotten or not correctly applied, although they are mandatory for good performance.\nIn a second part, we present and discuss the few concepts that are mandatory to design a source separation method. Each point will firstly be the focus of screencasting from an interactive notebook session that all the audience will be invited to, and then will also be explained with a theoretical presentation when appropriate. The whole tutorial will be thus split into practical hands-on sessions using online interactive Python sessions and more classical theoretical insights.\nThe third part of the tutorial provides some feedback on what seems to be important to get good performance in practice, with a focus on the training stage. On the one hand, many of the tricks discussed there are not often discussed in papers because a lot of them are negative results that are hard to publish: some interesting ideas that turn out ineffective yet. On the other hand, we also show how some very simple things make a huge difference in practice.\nIn the following part, we pick one single system, resulting from the previous discussion, and show how its performance can be dramatically improved by using just a few simple tricks at test time, including resynthesis methods, filtering tricks, and how to go stereo.")]),e._v(" "),t("p",[e._v("This tutorial is first targeted at PhD students and at engineers, that want to implement audio demixing methods in practice and to achieve state of the art performance while keeping highly readable code. Second, by showing how pytorch enables easy design and debugging, including new cost functions, architectures, etc., it will hopefully be of interest to researchers wondering how to do actual investigations on audio with DNNs, without being just users of high-level black-box systems.")])])}),[],!1,null,null,null);t.default=a.exports}}]);