(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"./src/docs/custom.mdx":function(e,n,a){"use strict";a.r(n);var t=a("./node_modules/react/index.js"),m=a.n(t),o=a("./node_modules/@mdx-js/tag/dist/index.js"),r=a("./node_modules/docz/dist/index.m.js"),A=a("./src/index.js"),l=a("./node_modules/styled-components/dist/styled-components.browser.esm.js");function s(e,n){if(null==e)return{};var a,t,m=function(e,n){if(null==e)return{};var a,t,m={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(m[a]=e[a]);return m}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(m[a]=e[a])}return m}n.default=function(e){var n=e.components,a=s(e,["components"]);return m.a.createElement(o.MDXTag,{name:"wrapper",components:n},m.a.createElement(o.MDXTag,{name:"h1",components:n,props:{id:"custom-configuration"}},"Custom configuration"),m.a.createElement(o.MDXTag,{name:"h2",components:n,props:{id:"using-a-custom-configuration"}},"Using a custom configuration"),m.a.createElement(o.MDXTag,{name:"p",components:n},"To use a custom config, import the ",m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"ThemeProvider"),"\nfrom Styled-components ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"import { ThemeProvider } from 'styled-components'"),",\nand pass a named object ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"awesomegrid")," to the theme prop, as the example below.\nThe properties of your custom configuration will overwrite the default settings. Just set properties that are different from the default."),m.a.createElement(o.MDXTag,{name:"p",components:n},"Try changing any property in customConf below and see what happens."),m.a.createElement(r.Playground,{__position:0,__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkqiUrGiJkjK8Eq1QyZnWTWWoXY2Hm_To5G67mScAIAlCKRSsDsIxeeHGNjsFU83iWM1g_m6mVsSPMtjgoRg62oqTxb3qiAAlGYjJIzBAiDNKAIpgAlGCuchTMBCIjsToSqXtADc_MFwrFioIABEAPIAWXYMsi8q6koIAFoTkQVWqhSKHJEhah9EbZfKcJJsK5BbAcJpbagzOLzXr9TguhgMgAKdbMNhidYWRh4ADMYkc6pdNE46pF2XYuImPScwJJNQEiCkacT5gs7EYMzE0YaUyiyRdBdc6BYMWo8XYMyEd3GlFSMCmL3Ykcw_VQKULMASnKkTaTDczztdklryekCcUZhOvSI-hwaQIAFFYKeaAAhRINdDRzrCAjtbmoTnKhTKb2-mB_S0ChqFoehEBUPMpmAR0aFcNAMiWUVRiWRwoCWZxyC6Og727NIlnCaB2HkN0TXaT04AEchAwFe1oKsTZTwABSEP5Z2I0i5XaVFElgdALU-LcaDgGioPYEMpU400tUDMxdFRY5TgAL2cAhePgdhuHYYB1iiARnlQK52gABnYVMZiwdpDzrGZuxYecjIAFgs9gADYLKs9YwFAgAxH1oESIz-GcQ5EUdTB2BYyh-CWIhqEoOBbMRTy628mhnAgJTLnYABGRzrPkVUg1QeSpgAQTmTT2GjGDyBsKB0EjYjOU0sRqrjGR2B42BuGAY8VLU7F5F3etgDq6BGuCAAyKbxkSeZKGacaGqa7g1vlMBQhKvtUHadgAH4NgmyNoxaq5lsm1B5DjfdZDMT8zFhDVjhgMAwigKZTta9q60YCq1zrCxgC-7g2p0wH61Kno8giIhHFQZotPB-sUfYU8WFcABFRkBEC9heF4dpqCSLqsKCINCes1HIcoKBQiIVB7m09dqawJn8pZ1G4CIK4AA4qep-siHQPmBcF9goBSK4coAJjFwWsCgaW5c5iwlFV1JwloAQAHUuAmK5kfF9g2el-Xqe5s2NYsYXpZwABWc3Uclu3Hetk2ldyh2nbVn3Bzsgo9fQA3mYh1mmZyv2LEt3Ko7RkWvbdsPnalxO48V12_fV5OLF0Ah4JdStQ-Nk2mYJ9pNoSculkefHCcrqBy6qqIsAtXFg7waXjOMgBSd2Y_Lhvq_YWvB9CKvCeb1xW_bkOcu7vuc6FhOx4nqyR8kOuK_HxvJ60lu2_1zvcoX92XfYABOYya83g_Z-PvLHOMiz3Yzy_r43tHp8Pjvpccp-X5L2zuLDwZpthCjQAQJmRtxam1jv3Hm7BHL80_gAdlcrzQBJdbZuXyp_eeMtnJYDPqnK-N9cr_2fsQpeFg36yw_rXHKF8ZZUI1sA1G11k5dAIH0cwsYl6MGsDAZirEuAZAJMImAvUYKuBGPASIMAUj9ATr0VEkR4bNHkMNd2jB4b5wQgIEaJdGDIRGEYkuDZMLYVQLhdAaQR7mOMWhF6HgMSl16o5Ei3Ner2xIsLXqqZtE0MFowRK7hpy0ykfwAUhQQAhH6K4C0UBXCBCgHwEAcAxxUFpuId2sC4B8GCeLYAniupEEKRYwWwBfHxwqZU1GwBAl5NRlIMJqBHHGykGhDp4tdG0xcW4tmHivHlMaX4ng1Sgn1PrKE2y5ghA9WiUQWJ8SICJOSak9JmSSw5JAD0ixQzmnUxKSMup0ygaBNqUchpF9OHnIbJINp-zqZdNps8mZkhTHvOTF865fSoADIXEM4AMtTnAFcuMnxJFJa9Qhd81GhyikNNBWUs59TwWQuuUDGpMKsXaQhX8yQ3S_nOMwK4oFBSQVgpRf4sZEsUiwqmecxF9yqWorxWy_xHLUHQoZRyglSK9zEqRVIX5wTXlwQMfsqQQiRG_DEYYzmn4UZaJuv9WsnJfwZKopIVQ2AgJkB0KBfQDBaLPT0QXcRxouKekEtQfQcAnjKMBKBS1Ah2h2meqYqS5EXVZgdU6rgkghAjA9agM1DpnHWo9H6oSUDA3oBdVAMNEapgADVbAQA8LAH1tqnT2uEpIQiUBJB_HyNmmAKaxIAAkuCYHMNG31drszxuLZIGwPY6BVrouwKx5NbH2MbXm_1ha21wDJjhPClbwThrEjBC8fa6D2GSXAOASwLwZpgCMJiz0SJDtjQW1tMQS3jusSJGdUNi1VSNguidqBl3-DXesDdEAt07pFGYThj0sA9pghagxSEUKOnQuwDN5bYBLFrZ21AGE70DpgARY9xEzBasouQA9LbHVKKDXnN1BrtB5xNRBVNkVhyWHmhpRtQ5KAzAtGpeY57Z09u6tkJYRszhwE_T6lj_Fm0OrDZ6h0uhIApDY-sbUDR9SXgAHLOAaLqWTXGh2ehwHmhGEAUgCZKtQBS_7C5VR4zgGQxRdKuH0mgC0_QUiECuGECIRUbZmYMkk16BBbPhEoEVdYAASYAMxvocZMxDXzEmpOyfk7JnAUQZjRhyKDdcwmNPRhmJyD4rqDEAG1jjsAALrsBmiWdTKRkupfRmsrLOQctBeprZHsBQXNgDc-wXziXispZwLV-yKQg4TAq7l-QXQiAOdRp1-rVmbPNbGtQETJWOsB3nD1vAfWcsDeEcNkonI7nsGKFtmdFhfP-dBuwAAhDMHAYA6ZcHy7NQL64QuSZk3JhTzgouzFi61BL02kvtdw5l7LeWCutdm2V1wy3quo18_RmAi1CszZ--lwuGX0B5bWlpdoqB6aBHdQdbbd8j5XBa19trqXfuI_-6tobxR2BXGKHj3-J9e7Kh2-uYom31jM-Kvt4GMEyVuPkC1I7vOFyA9XeDiwHhJTbCUW0DAAlabCiuAAYntlfHK3Yn7rb2OEKACEldgH111WmV2coWWGxzoLZg9MZCM7YckrhEjSZ9N0NHVv3Uztdx1sjFG7BIy8pdhOUUZjkYYzgLwtMBYXUjFcQPwf4A4B-JgAWQvo9e5D2HxuV0Z1PQdJgN648piu5Q0obV6G-OFuw4mkN-GQJ6HAiAQTUweNsZ6KujijaeNy5HVA7tz0Y_e59dR2jUPGMkda830Lj2IvODb-6ciKm1Mia01Db1WlDPGfWNUC0-QlIFCuF4AQs4LTVGGywRKyS8YXewMNy_WBpbsFMnZzzfvsBWggF0KUAxDIRJGNf2AM9MgzBXAjAAHDY-Z-YBai53bAAT7hbPavYxZxbmJA7w6Spk6VbXaw7falbZDlb_Zi5CxOYWawCNZXAWiE5FazYpBawZCLZI55abygqDaa6ObmaoCWYaYTZkFTYUHtZUE3A0FHx0EjzsCMFracwHZ9YADU8o4orAGQcAlauWGBxQN-r-7-O0VwIalmMAchAgChTOW2G2W2HOYBNUgKzU30QuGBt2EMEuOw0uW0vG8uRcyuqu6uxkmu-wOuLoeuBumSOuOQJuWAZunCFuqApiNuZ-9ujup4VU7QpiWmERg-sePuxcpcsh8h2Ufeaewg6E6w3MGRehWRqece6eAswshRChKeNGKRoeuRAskslRxRNR3udR4e6wisTR1RQerRZR6wkedA3RtRCeCG6wyepGLROROSmexU2eUwue70YoowReygaGGGAaFeSa1eRqteBgxGYkTe2kLedge6s-HeZe3eDeExPRDGA-w4dG3uPeQmRO4-D2sBsmM-ZEqmkg3xrWS-OmBe_Sq-g02QNurA4Om-2-u-7A--h-x-z-t-uU9-IQHmw2dOc8C8J-tu5-VwN-v-L-LA6hn-50tM9MqAXmdYB230p28elAAA4tQUcCLnAPgfdmFk9pFtFu9vFhDMgalqAhKOApQJAnAEIYDkTsDjgaDsjvgRYKNvOOwdZk1uQXDqlnwdrLQcjsIaIUNpzPKSkA1sqdwaqeeIyZqfQSIRTprqzsYV-pSeAUdjYSjGyZPnAVyYgZ9jwfyWAhAsJGKTdhKe1iDnQbKZNjMP6dthrDfnfjlJNslkIZvHyWlnTAzKKcji1EYAzvID3MwQQTPPjnGeGVqYmYGSTqSamXQRmVmTmZzBzijDaeznaVzodm1E6fWC6e8S9u6R9ryaWaHj6cKX6VqeKV6VFlKSGeIX5lIfKLqPrgoe-EoQVrToQWwcQUafGdltIe0LOWAPOXtBaUmVQCmYzJWewJmfPMZNmTttaWznWCYfaS2ccaydAW8RyV2W9h6b2aOQKa4EKSKRGUmcGTKZOeGZuTIToZkfucoaoYSVsBoSWMedoboQodeSzreSUE2XGTzjAOShYYLjhW4syfgXYVLkII4XLlAAruwK4cZGrugBruuF4brtRfrs0P4cbqbo2WYGEWhJEXbg7k7nEWhP8YzFMBjkQFjrqAIKpHOAuFpNkXHvarObHtGBlusApXADgKiLJQLBpfHpjmCKgDlg9PerTJ7pMRpL7nWHAuJZJdJWiAUALDHLZRkFJTJY5bpAnC5QIG5Q5fOA0anN5b5TpR0Z7EFfZSFdZXADufOVcOFe5f5fkUQDFROHFQZT5RFR5XWMLClU1vFX5aJusJLLlWlRJa5ZlYldZVACVewPlZFbQnAF0dcbUX0XWAURBUUUMb0fUZ5U1Xpa1RYI0R1VUc1d1e0VVX1SUZpQNbVfSYyV1VMXkXWAMV_npSMUngRanP1bkZ-lnj-s9AsfnsBisSXusaOseqWpmhWtsYRnXiRhJAQM3puIep8VxGaEqFcRpXcTRg8Qxk8fRLetYg-q3qcV8Z6GOneiPnOoWHiLKt0KDVxOcfmphlpnMT0CunYGBlmjmtgGBOgHYM9S2mkaiNELEC9Hnh9IHqkTAqXLifEAofLDHG9FAAzeuDgszazRDOfBzaMRDG_DzesFtqVOiFKMKNVC1DTQyHCKdOuBMLYFpfnLQNeqeuTEZGzO0FtkLcjfoHrAkPqDLp9BLbLYSFpROIuqgDLRDBAM0NGFDjDriBgKMCdutO0I4a9AhOgB-GkSjA7ScCMDgHZJeHITQAADK2BgQxhEzwhwQ7R1TuBpDrxy2aXznm1LA83Kqoy-2jAB09hB36Bh2ojpACAvhdDb6VpLBJ2m0ECp1Gj00wAZ1qyC35Fm13pVQgxgzriwBTArrV13rA2pGV0k20BaV3qekKTmihDxDm391VSA3kz9220m2D5wAN2cA23HY93T0Y3sAAA-O91Um9fd29x260E9U9R9j6nIRtych9QN29WkZ9UAW9j6nMg9ZtitMANUKtgxIQUok9T9F9q6_O64mte2JYXeutUAAAqqgHFFtIbd7TDY7f7YNr8DAHnaHeHUXS-MKK-jHZ_nHfOOXQSPLSnXeqvVnSg8ImgxgwQAXRHcXQqGXYnSbWQ9YhnZhbYFjRWuLYg1DDBGzEsNzLFIsPSksIrBxFpJXcveuHAEWHVNVIPR_SPew4g7nJSPKOrYgBrNwrwqXJzHEAofKNzO0No0vLowIOYNzAYxo-0MLKYzoxOHo8LDY0Y-0JLA4-Y045Y_Sq490O0IrJ4-LBY-YIrJzIdR9GY8E94w2nXSA03ZztOHQOxF9DTfw0dCtMECRFI0vcOJxokxYNbdVMdpXVw1dbAKdC1CE7XSzUyBDNU_wi8g9TgD5JkCkLeAQPsmNPVJdIYR8s06064O0_oOYhw7tcVNw36KfvxTEc7vKJM9OhM-U4BMkf3lZQ1QtaUT1W1YgtteNTbAHlNW0UtYNVtUczNW_Hsycxk5dJs5pSMeM9-j2hE1MEWHgHDdGAs5-KhjqhcY6m2h2vWjdcandWJA9U9drTmAjdJOaP9aNbcVRvccPnC_Oi3XfY-q9R6ODRdd_YzCizDRMHDZi9xCCU4V3oxk889OQNvVBvWjCFgHjQTZC9BPkYrWTS81TdeuuHAjzYzYgry2zQnAK1zanMKyjPzXE3WFraJSLREEcKk7I6ENLavUo1kMrXemrSJKA8tcy5A_rfA7wzTW_b3dYpbSjEU7bRRvbaoE7SfWjm7ZAC6J7dfdTJQznegLQ_Q9g1HXg2y9QIQwnRXaw2i-TGnXXavRYG64HcHXQ1g4XCXfAJlMQ8azXenfE1K83Sa-TG3QLh3VzROBLP4Fm0uvfSQ8nco7i2PVMI_c_a3lpHPSW4-ovfLcvavRaxvUW7W3YHvQfZ24A3YHa7_Twufei6ulfWo4W6iF21VDW_26_cG9XR_V_Rq0O__V28AxDNq_0bq9ANA7AwbYa-uG66g3IZ63G5Hbg_oKTf634EQyw6QyG3QBQza1Q3FKezG16_G0w0m_e8nY-1-I83WLYLS8EAq1-QpAI2umUiI0sJLOIwCtk2W-ZXcLI_I_iM2-W1kCo-TC66jIY_41o44zwj42zH48YzaFE4LNU9Y8nPh_KPY5R9TNUy47R7Yx44x6jNU5LGRwE8mhxyjNU2E8nC8_x_WNU2iIyOm43YkzOOImByjOkytZI0hzIwU2vYoybcB3WnQJU0k8R7E7U-uA05zCYlqC020x010ytX03uAMxZyM-uGMzMWYCB6gHxefrM3Ea51pq58hykVy1FXc8c05bs-c9swc0FzNefFcwLJc2F_szc1HvC3Hg885y6PtTnq9IsQS-84xJ_a5988XmsX80Wji3BlOsC7saagcaS2JstaukpmcaS53nGhS0xlSy8WkTAW-Y12DT8QvhpiJQpObfBgZqS2CfgUpBaHqoifPJrkKPkPBZADUOgJrmlJaGXa7EweuOt23DABwU1l4A1JruNk1vPJxbYSILDF3Bdz7QWfbFQprpsAd1cKmI9-uCRQ4bLkeVRTRXRQxRDNMziUaH_prrCRkJZt2BAHkFcPbLd_WOoDDNbYkHLrsedPoBkJrvEBpmwS8MIkzIiHoAIMNlSY6ZAcFi-eyVPvAdyUgX2T-X-UOQDgGaOUBVVpzIgIgIEN5F0BO7nCC01u0L5ugPIGGtTH0w2XeaETOiNxV0D9EYJWjrL3Yos5S5lxTVMMr2kCdcV8y_82V2epV2BHsZBD2mPkcd11PsS98b8UTqjRl9KFtB_iyC-m-s9PJ-p5awtM0JQ87fa1GI69kHtAVm62gIXItrhxYNU6H6gOH0fAk1HzE7VTvIB2jZtNtJ_uOMW_etvclnk9evzmkVDLi_3ZZewJb89tu6JTCQOSKVVMgXk96YKb6VAmA1DEICID5KBFVHbT7y-37_KA6x7WL_WIdG6xeJuOENkKpOpLFqcPTGeAAI44yJDOBLhwXCgviEAkAfhqkTiB4ZBqRprxCMgvi7fMOpZdB26IgvgeRLDtBe09s5SuTrjSwv-JNQwWR3i1_CRVS6geDqA4KOAVgCf3gDRgGeLfFejTw8CPkYBZ5CJJ31AgmVBqBbEvhjSr4KQ_gW6HtPWwnCbpt0GoM1p7ywEjA6IkfUmKO1SJoDH08ADLMZByzrgLWX_H_lAgyw5Rme7AEgT2jEBaRmBzfQcqwPYEtRqBdbCgfPQxq0D2BjAm2nwN_KQCMsMsDgVwOeg8DBwWAb_vwP_KKDhB_bAzP21oGKDpB1UWQYz1YGpglBr6UgSoN4HqCWBopcwToMoF6DKBtA8wUYOSy2DNBfpRyBYOwHWC1BGguQQINFI-DHB4gjFqvn0EhCGBGbOsNRznZXQioPzUvETiN5EZTez0WqCDW4zNc_mQ3AvFA2cCWADQAAfXsAKYfIcRWRPIlPAV4w0aNKGBXw-JaQMsATESPfxMb397G9_Dxvf0CYxCGhAJdgHeDKjOBLwZQioQFxthSlsYGQPGETFQAkxcWKUfnseWgTct2YfLUWIK22EitlY8sOhDLEFoCx1SAhenDTTgSRxZGiCK4RDBwQ5RvYndVOA8KTjitPYLw44esH1KLZDYGwq2BDBji3CUY9wx4XsLTjct3hDsT4Tq1QIZBfhfNJmNvASDrxa4SI5NFPHzL04Lyi8FGDHDREojN4-IjET_AxK9wdhG0HeASIpHIjiR98LuGSLBFkJP46JB-JQiwT1g34V8Zkd_DpEUIAE1CX2BvjsHwjxWEcLYUghQS1x0EmCAUcvCuCuQ8EjCYyIQnZGnMrgTIxhGyNlG0J3hLCfBMwlYSxC7SUMVrKkQywxCoYfgOAPYBhjqJpsVUZet9AABSzgBTArVkrI9owefGjJpQmCSIMCy9HAH6NPAZZ7AhQ4ofqAmHSYfIxlXevvWAAbt2-8iKAHIQ0QaYHR-fI7OxiGHBiYAGiNuoGNzEBi8mQYvLqGPDGlDyh0Y2MT2wTFt8hhwmKYfWFUw4ARhYwqMT5HlgtjcxGiBJlXzABjkMYf_AAUAO2AwBEgcAaMMJn7JeCoEl_bIKEBv7RgQcSwCAQINzZ8Mhha4yBItnr7TYZxQQ_8tuJoAxDgR45Y8QQBRxfwxx-oKUo01RhqUl404kHLMNxh-wLxA_UyEuWXEWZeRvmC8YtgpychQyp4wWOdmgDaxowd4XIhKAA5Lx_Qg5F8CEAwDyhV6q9ZjlKWOHaQN26wapsJlT4O9ya2XdPs73MCtZjBmY7CbhxNG2i4Y9orSFaJtFqI6JCMb0XcAzoWtTRdAlHOtFUSwwNE5AvCUTlFJSDYhGAqYI2K0il1aYqYwMo33rFFZRS9A-vrRN7EwiRMIkq8fhJk5J9tJdpEiTtGvEwBbxQ45cVKVw4NMWxTmFehARZLrgAAAiDkmwg4SINNLnBxmjBWT9IK9PpsYXGZaoko2wIZoBE0DUBDUt1E3kbH4CoAnc_AK4PwCBDEgqg3gCHv-HJBMgQAAsfgMhU_xxT8YIAYyDgEKnGQYo6wfgOUCwgQAZgO0PKfwDKhdRaIONLAD6HSkvRyQlARIAWDyAFAkm5oOXOUBBApSBApUusPwCiBoBapKgKMBoE4yZSypIATAPMCjAlRX0s0kUfWH4BI1yWk0gAHqOQipOAI4XNIhj8B3qogJAPlJ2nP8HYh0kaSjH4CD5fq8AXaTlHtg4BXIt046fdMEBagrQkQF6R9LelHSEm8gVDINNwCtYgIYUgjALwYA6QQAtAX0FkDikJSzQtAbQn1NmAzB-AoMrRPICAA",__code:"{() => {\n  const customConf = {\n    mediaQuery: 'only screen',\n    columns: {\n      xs: 4,\n      sm: 8,\n      md: 8,\n      lg: 12,\n      xl: 12,\n    },\n    gutterWidth: {\n      xs: 1,\n      sm: 1,\n      md: 1.5,\n      lg: 1.5,\n      xl: 1.5,\n    },\n    paddingWidth: {\n      xs: 1,\n      sm: 1,\n      md: 1.5,\n      lg: 1.5,\n      xl: 1.5,\n    },\n    container: {\n      xs: 'full', // 'full' = max-width: 100%\n      sm: 'full', // 'full' = max-width: 100%\n      md: 'full', // 'full' = max-width: 100%\n      lg: 90, // max-width: 1440px\n      xl: 90, // max-width: 1440px\n    },\n    breakpoints: {\n      xs: 1,\n      sm: 48, // 768px\n      md: 64, // 1024px\n      lg: 90, // 1440px\n      xl: 120, // 1920px\n    },\n  }\n  return (\n    <ThemeProvider theme={{ awesomegrid: customConf }}>\n      <Container>\n        <Row>\n          <ScreenBadge />\n          <Col debug xs={4} sm={5} md={3}>\n            <span role=\"img\" aria-label=\"so cool\">\n              xs=\n              {4} sm=\n              {5} md=\n              {3}\n            </span>\n          </Col>\n          <Col debug xs={4} sm={3} md={5}>\n            <span role=\"img\" aria-label=\"so cool\">\n              xs=\n              {4} sm=\n              {3} md=\n              {9}\n            </span>\n          </Col>\n        </Row>\n        <Row>\n          <Col debug xs={2} sm={6} md={5} lg={6}>\n            xs=\n            {2} sm=\n            {6} md=\n            {5} lg=\n            {6}\n          </Col>\n          <Col debug xs={2} sm={2} md={3} lg={6}>\n            xs=\n            {2} sm=\n            {2} md=\n            {7} lg=\n            {6}\n          </Col>\n        </Row>\n      </Container>\n    </ThemeProvider>\n  )\n}}",__scope:{props:a,Container:A.b,Row:A.d,Col:A.a,ScreenBadge:A.e,util:A.g,ThemeProvider:l.a}},function(){return m.a.createElement(l.a,{theme:{awesomegrid:{mediaQuery:"only screen",columns:{xs:4,sm:8,md:8,lg:12,xl:12},gutterWidth:{xs:1,sm:1,md:1.5,lg:1.5,xl:1.5},paddingWidth:{xs:1,sm:1,md:1.5,lg:1.5,xl:1.5},container:{xs:"full",sm:"full",md:"full",lg:90,xl:90},breakpoints:{xs:1,sm:48,md:64,lg:90,xl:120}}}},m.a.createElement(A.b,null,m.a.createElement(A.d,null,m.a.createElement(A.e,null),m.a.createElement(A.a,{debug:!0,xs:4,sm:5,md:3},m.a.createElement("span",{role:"img","aria-label":"so cool"},"xs=",4," sm=",5," md=",3)),m.a.createElement(A.a,{debug:!0,xs:4,sm:3,md:5},m.a.createElement("span",{role:"img","aria-label":"so cool"},"xs=",4," sm=",3," md=",9))),m.a.createElement(A.d,null,m.a.createElement(A.a,{debug:!0,xs:2,sm:6,md:5,lg:6},"xs=",2," sm=",6," md=",5," lg=",6),m.a.createElement(A.a,{debug:!0,xs:2,sm:2,md:3,lg:6},"xs=",2," sm=",2," md=",7," lg=",6))))}),m.a.createElement(o.MDXTag,{name:"h2",components:n,props:{id:"default-values"}},"Default values"),m.a.createElement(o.MDXTag,{name:"table",components:n},m.a.createElement(o.MDXTag,{name:"thead",components:n,parentName:"table"},m.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"thead"},m.a.createElement(o.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"prop"),m.a.createElement(o.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"type"),m.a.createElement(o.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"default value"),m.a.createElement(o.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"description"))),m.a.createElement(o.MDXTag,{name:"tbody",components:n,parentName:"table"},m.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"columns"),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"number"),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"{ xs: 4 sm: 8, md: 12, lg: 12, xl: 12 }"),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"number of columns on grid")),m.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"gutterWidth"),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"number"),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"{ xs: 1 sm: 1, md: 1.5, lg: 1.5, xl: 1.5}"),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"gutter width in rem")),m.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"paddingWidth"),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"number"),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"{ xs: 1 sm: 1, md: 1.5, lg: 1.5, xl: 1.5}"),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"size of outer padding on container in rem")),m.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"mediaQuery"),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"string"),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"'only screen'"),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"media type of media query")),m.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"container"),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"shape"),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"{ xs: 'full', sm: 'full', md: 'full', lg: 90, xl: 90 }"),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"size of containers in rem")),m.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"breakpoints"),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"shape"),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"{ xs: 1, sm: 48, md: 64, lg: 90, xl: 120 }"),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"breakpoints in rem")))))}}}]);