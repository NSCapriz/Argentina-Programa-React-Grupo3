import React from 'react'

const Footer = () => {
    return (
        <>
        <div className="container_footer">
                <div className="container_footer--redes">
                <p>Nuestras redes:</p>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"  viewBox="0 0 100 100">
                    <path fill="#c7ede6" d="M88.704,55.677c0.3-0.616,0.566-1.264,0.796-1.943c2.633-7.77-1.349-17.078-9.733-19.325C78.86,23.026,70.86,15.216,61.826,13.884c-10.341-1.525-19.814,5.044-22.966,15.485c-3.799-1.346-7.501-1.182-10.99,0.857c-1.583,0.732-3.031,1.812-4.33,3.233c-1.907,2.086-3.147,4.719-3.652,7.495c-0.748,0.118-1.483,0.236-2.176,0.484c-4.04,1.449-6.589,4.431-7.288,8.923c-0.435,2.797,0.443,5.587,0.933,6.714c1.935,4.455,6.422,6.98,10.981,6.312c0.227-0.033,0.557,0.069,0.752,0.233c0.241,7.12,3.698,13.417,8.884,17.014c8.321,5.772,19.027,3.994,25.781-3.921c2.894,2.96,6.338,4.398,10.384,3.876c4.023-0.519,7.147-2.739,9.426-6.349c1.053,0.283,2.051,0.691,3.083,0.804c4.042,0.442,7.324-1.165,9.732-4.8c0.922-1.391,1.793-3.194,1.793-6.354C92.174,60.634,90.88,57.667,88.704,55.677z"></path><path fill="#fff" d="M18.368 47.713H8.338c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h10.03c.276 0 .5.224.5.5S18.645 47.713 18.368 47.713zM21.25 47.713h-1.446c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h1.446c.276 0 .5.224.5.5S21.526 47.713 21.25 47.713zM25.304 47.713h-2.546c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h2.546c.276 0 .5.224.5.5S25.58 47.713 25.304 47.713zM25.304 49.578h-9.616c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h9.616c.276 0 .5.224.5.5S25.58 49.578 25.304 49.578zM13.956 49.578h-.58c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h.58c.276 0 .5.224.5.5S14.233 49.578 13.956 49.578zM11.579 49.578h-1.456c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h1.456c.276 0 .5.224.5.5S11.856 49.578 11.579 49.578zM20.715 45.848h-5.027c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h5.027c.276 0 .5.224.5.5S20.991 45.848 20.715 45.848zM20.715 43.983h-1.257c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h1.257c.276 0 .5.224.5.5S20.991 43.983 20.715 43.983zM17.447 51.443h-1.759c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h1.759c.276 0 .5.224.5.5S17.723 51.443 17.447 51.443zM74.394 25.392h-10.03c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h10.03c.276 0 .5.224.5.5S74.671 25.392 74.394 25.392zM77.276 25.392H75.83c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h1.446c.276 0 .5.224.5.5S77.552 25.392 77.276 25.392zM81.33 25.392h-2.546c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h2.546c.276 0 .5.224.5.5S81.607 25.392 81.33 25.392zM81.33 27.257h-9.617c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h9.617c.276 0 .5.224.5.5S81.607 27.257 81.33 27.257zM69.982 27.257h-.58c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h.58c.276 0 .5.224.5.5S70.259 27.257 69.982 27.257zM67.605 27.257h-1.456c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h1.456c.276 0 .5.224.5.5S67.882 27.257 67.605 27.257zM76.741 23.527h-5.028c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h5.028c.276 0 .5.224.5.5S77.018 23.527 76.741 23.527zM76.741 21.662h-1.257c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h1.257c.276 0 .5.224.5.5S77.018 21.662 76.741 21.662zM73.472 29.122h-1.759c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h1.759c.276 0 .5.224.5.5S73.749 29.122 73.472 29.122z"></path><path fill="#fdfcef" d="M74.965,48.546c0,0,10.616,0,10.681,0c2.452,0,4.439-1.987,4.439-4.439c0-2.139-1.513-3.924-3.527-4.344c0.023-0.187,0.039-0.377,0.039-0.57c0-2.539-2.058-4.598-4.597-4.598c-1.499,0-2.827,0.721-3.666,1.831c-0.215-2.826-2.739-5.007-5.693-4.646c-2.16,0.264-3.947,1.934-4.344,4.073c-0.127,0.686-0.114,1.352,0.013,1.977c-0.579-0.624-1.403-1.016-2.322-1.016c-1.68,0-3.052,1.308-3.16,2.961c-0.763-0.169-1.593-0.158-2.467,0.17c-1.671,0.627-2.861,2.2-2.93,3.983c-0.099,2.533,1.925,4.617,4.435,4.617c0.191,0,0.861,0,1.015,0h9.218"></path><path fill="#472b29" d="M85.646,49.046H74.965c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h10.681c2.172,0,3.939-1.767,3.939-3.939c0-1.854-1.316-3.476-3.129-3.855c-0.254-0.053-0.425-0.292-0.394-0.55c0.021-0.168,0.035-0.337,0.035-0.51c0-2.259-1.838-4.098-4.098-4.098c-1.292,0-2.483,0.595-3.267,1.632c-0.126,0.166-0.34,0.237-0.54,0.179c-0.2-0.059-0.342-0.235-0.358-0.442c-0.094-1.238-0.701-2.401-1.664-3.19c-0.973-0.798-2.207-1.149-3.471-0.997c-1.947,0.238-3.556,1.747-3.913,3.668c-0.112,0.601-0.108,1.201,0.011,1.786c0.045,0.22-0.062,0.442-0.261,0.545c-0.199,0.102-0.443,0.06-0.595-0.104c-0.513-0.552-1.208-0.856-1.956-0.856c-1.4,0-2.569,1.095-2.661,2.494c-0.01,0.146-0.082,0.28-0.199,0.367c-0.117,0.087-0.268,0.118-0.408,0.088c-0.755-0.167-1.468-0.118-2.183,0.15c-1.498,0.562-2.545,1.982-2.606,3.535c-0.042,1.083,0.347,2.109,1.096,2.889c0.75,0.78,1.758,1.209,2.84,1.209h10.233c0.276,0,0.5,0.224,0.5,0.5s-0.224,0.5-0.5,0.5H61.866c-1.356,0-2.621-0.539-3.561-1.516c-0.939-0.977-1.428-2.263-1.375-3.621c0.076-1.949,1.384-3.73,3.254-4.432c0.72-0.27,1.464-0.363,2.221-0.279c0.362-1.655,1.842-2.884,3.582-2.884c0.603,0,1.194,0.151,1.72,0.431c0.004-0.327,0.036-0.655,0.097-0.983c0.436-2.346,2.399-4.188,4.775-4.478c1.54-0.191,3.039,0.244,4.226,1.216c0.899,0.737,1.543,1.742,1.847,2.851c0.919-0.807,2.094-1.256,3.347-1.256c2.811,0,5.098,2.287,5.098,5.098c0,0.064-0.001,0.128-0.004,0.192c2.048,0.628,3.492,2.547,3.492,4.723C90.585,46.83,88.369,49.046,85.646,49.046z"></path><path fill="#fdfcef" d="M72.392,38.767c-1.642-0.108-3.055,1.026-3.157,2.533c-0.013,0.187-0.004,0.371,0.023,0.55c-0.317-0.358-0.786-0.6-1.324-0.636c-0.985-0.065-1.836,0.586-1.959,1.471c-0.179-0.049-0.366-0.082-0.56-0.095c-1.437-0.094-2.674,0.898-2.762,2.216"></path><path fill="#472b29" d="M62.654,45.057c-0.006,0-0.012,0-0.017,0c-0.138-0.009-0.242-0.128-0.233-0.266c0.098-1.454,1.453-2.556,3.028-2.449c0.116,0.008,0.234,0.022,0.353,0.045c0.26-0.878,1.158-1.485,2.166-1.421c0.377,0.025,0.73,0.139,1.035,0.33c0-0.004,0-0.008,0-0.012c0.111-1.641,1.652-2.872,3.423-2.765c0.138,0.009,0.242,0.128,0.233,0.266c-0.009,0.138-0.131,0.243-0.266,0.233c-1.514-0.102-2.799,0.933-2.891,2.3c-0.011,0.165-0.004,0.332,0.021,0.496c0.017,0.109-0.041,0.217-0.141,0.264c-0.098,0.047-0.219,0.023-0.293-0.061c-0.285-0.321-0.705-0.522-1.154-0.552c-0.846-0.056-1.589,0.496-1.695,1.256c-0.01,0.071-0.05,0.134-0.109,0.174c-0.06,0.04-0.135,0.051-0.203,0.033c-0.173-0.046-0.345-0.076-0.511-0.086c-1.303-0.085-2.417,0.805-2.497,1.983C62.894,44.956,62.784,45.057,62.654,45.057z"></path><path fill="#fdfcef" d="M87.443,40.283c-1.543-0.727-3.327-0.213-3.985,1.15c-0.082,0.169-0.142,0.344-0.182,0.521"></path><path fill="#472b29" d="M83.275,42.204c-0.018,0-0.037-0.002-0.056-0.006c-0.135-0.031-0.219-0.165-0.188-0.299c0.045-0.199,0.113-0.393,0.201-0.574c0.716-1.484,2.651-2.054,4.317-1.268c0.125,0.059,0.179,0.208,0.12,0.333c-0.059,0.126-0.209,0.177-0.333,0.12c-1.417-0.667-3.056-0.204-3.654,1.033c-0.072,0.148-0.127,0.305-0.164,0.468C83.492,42.125,83.389,42.204,83.275,42.204z"></path><path fill="#babce2" d="M65.26,69.974H39.538c-3.766,0-6.847-3.081-6.847-6.847V37.405c0-3.766,3.081-6.847,6.847-6.847H65.26c3.766,0,6.847,3.081,6.847,6.847v25.722C72.108,66.893,69.026,69.974,65.26,69.974z"></path><path fill="#472b29" d="M65.261,70.675H39.538c-4.162,0-7.548-3.386-7.548-7.547V37.405c0-4.162,3.386-7.547,7.548-7.547h25.722c4.162,0,7.547,3.386,7.547,7.547v25.722C72.808,67.289,69.422,70.675,65.261,70.675z M39.538,31.258c-3.39,0-6.147,2.757-6.147,6.147v25.722c0,3.39,2.758,6.147,6.147,6.147h25.722c3.39,0,6.147-2.757,6.147-6.147V37.405c0-3.39-2.757-6.147-6.147-6.147H39.538z"></path><path fill="#fdfcee" d="M63.743,67.159H41.055c-3.052,0-5.549-2.497-5.549-5.549V38.922c0-3.052,2.497-5.549,5.549-5.549h22.688c3.052,0,5.549,2.497,5.549,5.549V61.61C69.292,64.662,66.795,67.159,63.743,67.159z"></path><path fill="#472b29" d="M64.158,67.509H40.64c-3.024,0-5.484-2.46-5.484-5.484V38.508c0-3.024,2.46-5.484,5.484-5.484h22.395c0.193,0,0.35,0.157,0.35,0.35s-0.157,0.35-0.35,0.35H40.64c-2.638,0-4.784,2.146-4.784,4.784v23.517c0,2.638,2.146,4.784,4.784,4.784h23.518c2.638,0,4.784-2.146,4.784-4.784v-13.01c0-0.193,0.157-0.35,0.35-0.35s0.35,0.157,0.35,0.35v13.01C69.642,65.049,67.182,67.509,64.158,67.509z"></path><path fill="#472b29" d="M69.292 47.488c-.193 0-.35-.157-.35-.35v-2.503c0-.193.157-.35.35-.35s.35.157.35.35v2.503C69.642 47.331 69.486 47.488 69.292 47.488zM69.292 43.734c-.193 0-.35-.157-.35-.35v-1.251c0-.193.157-.35.35-.35s.35.157.35.35v1.251C69.642 43.577 69.486 43.734 69.292 43.734z"></path><path fill="#8a8dce" d="M62.446,43.317c-0.27-0.697-0.631-1.287-1.221-1.877c-0.59-0.59-1.18-0.951-1.877-1.221c-0.672-0.262-1.45-0.443-2.573-0.492c-1.131-0.049-1.491-0.066-4.376-0.066c-2.885,0-3.245,0.008-4.376,0.066c-1.131,0.049-1.901,0.229-2.573,0.492c-0.697,0.27-1.287,0.631-1.877,1.221s-0.951,1.18-1.221,1.877c-0.262,0.672-0.443,1.45-0.492,2.573c-0.049,1.131-0.066,1.491-0.066,4.376s0.008,3.245,0.066,4.376c0.049,1.131,0.229,1.901,0.492,2.573c0.27,0.697,0.631,1.287,1.221,1.877s1.18,0.951,1.877,1.221c0.672,0.262,1.45,0.443,2.573,0.492c1.131,0.049,1.491,0.066,4.376,0.066c2.885,0,3.245-0.008,4.376-0.066c1.131-0.049,1.901-0.229,2.573-0.492c0.697-0.27,1.287-0.631,1.877-1.221s0.951-1.18,1.221-1.877c0.262-0.672,0.443-1.45,0.492-2.573c0.049-1.131,0.066-1.491,0.066-4.376s-0.008-3.245-0.066-4.376C62.888,44.759,62.708,43.989,62.446,43.317z"></path><path fill="#472b29" d="M52.399,61.22c-2.869,0-3.245-0.017-4.364-0.064c-1.09-0.048-1.918-0.207-2.712-0.517c-0.789-0.306-1.404-0.707-1.997-1.3c-0.593-0.593-0.994-1.209-1.299-1.998c-0.311-0.795-0.469-1.623-0.515-2.685c-0.058-1.136-0.066-1.491-0.066-4.391c0-2.872,0.017-3.249,0.065-4.368c0.047-1.085,0.206-1.913,0.516-2.708c0.305-0.787,0.706-1.403,1.299-1.997c0.593-0.593,1.208-0.994,1.997-1.3c0.795-0.31,1.623-0.469,2.685-0.515c1.138-0.058,1.492-0.066,4.391-0.066c2.883,0,3.261,0.017,4.38,0.065c1.075,0.047,1.903,0.206,2.696,0.516c0.789,0.307,1.405,0.708,1.997,1.3c0.593,0.593,0.994,1.209,1.3,1.997l0,0c0.31,0.795,0.469,1.623,0.515,2.685c0.058,1.136,0.066,1.491,0.066,4.391c0,2.872-0.017,3.249-0.065,4.368c-0.047,1.087-0.206,1.915-0.516,2.709c-0.306,0.788-0.707,1.403-1.3,1.997c-0.592,0.592-1.208,0.993-1.997,1.3c-0.794,0.31-1.623,0.469-2.685,0.515C55.653,61.212,55.298,61.22,52.399,61.22z M52.399,40.012c-2.882,0-3.233,0.008-4.358,0.065c-0.984,0.043-1.743,0.187-2.464,0.468c-0.694,0.27-1.235,0.622-1.756,1.143c-0.521,0.521-0.874,1.062-1.142,1.755c-0.281,0.721-0.425,1.48-0.468,2.461c-0.049,1.131-0.065,1.504-0.065,4.361c0,2.883,0.008,3.235,0.065,4.358c0.042,0.983,0.187,1.743,0.468,2.463c0.269,0.694,0.621,1.235,1.142,1.756c0.521,0.521,1.062,0.873,1.756,1.143c0.72,0.281,1.479,0.425,2.461,0.468c1.135,0.049,1.507,0.065,4.361,0.065c2.882,0,3.233-0.008,4.358-0.065c0.985-0.043,1.744-0.188,2.463-0.468c0.695-0.27,1.236-0.622,1.756-1.143c0.521-0.521,0.874-1.062,1.143-1.755c0.281-0.72,0.425-1.479,0.468-2.462c0.049-1.131,0.065-1.504,0.065-4.361c0-2.883-0.008-3.235-0.065-4.358c-0.042-0.984-0.187-1.743-0.468-2.463c0,0,0,0,0-0.001c-0.269-0.693-0.622-1.234-1.143-1.755c-0.52-0.521-1.062-0.873-1.756-1.143c-0.719-0.281-1.478-0.425-2.461-0.468C55.641,40.029,55.267,40.012,52.399,40.012z"></path><path fill="#fdfcef" d="M52.391,44.817c-3.007,0-5.449,2.442-5.449,5.449s2.442,5.449,5.449,5.449s5.449-2.442,5.449-5.449S55.398,44.817,52.391,44.817z"></path><path fill="#472b29" d="M52.391,56.066c-3.198,0-5.799-2.602-5.799-5.8s2.602-5.799,5.799-5.799s5.8,2.602,5.8,5.799S55.589,56.066,52.391,56.066z M52.391,45.167c-2.812,0-5.099,2.288-5.099,5.099c0,2.812,2.288,5.1,5.099,5.1c2.812,0,5.1-2.288,5.1-5.1C57.491,47.454,55.203,45.167,52.391,45.167z"></path><path fill="#fdfcef" d="M58.254 42.964A1.27 1.27 0 1 0 58.254 45.504000000000005A1.27 1.27 0 1 0 58.254 42.964Z"></path><path fill="#472b29" d="M58.254,45.854c-0.893,0-1.62-0.727-1.62-1.62c0-0.894,0.727-1.621,1.62-1.621c0.894,0,1.621,0.727,1.621,1.621C59.874,45.127,59.147,45.854,58.254,45.854z M58.254,43.314c-0.507,0-0.92,0.413-0.92,0.92c0,0.507,0.413,0.92,0.92,0.92c0.508,0,0.92-0.413,0.92-0.92C59.174,43.726,58.762,43.314,58.254,43.314z"></path><path fill="#fdfcef" d="M42.126,72.487c1.71,0,3.194,0,3.215,0c1.916,0,3.469-1.52,3.469-3.396c0-1.636-1.182-3.001-2.756-3.323c0.018-0.143,0.031-0.288,0.031-0.436c0-1.942-1.609-3.517-3.593-3.517c-1.172,0-2.209,0.551-2.865,1.401c-0.168-2.162-2.141-3.83-4.45-3.554c-1.688,0.202-3.084,1.479-3.395,3.116c-0.1,0.525-0.089,1.034,0.01,1.512c-0.453-0.477-1.097-0.777-1.814-0.777c-1.313,0-2.385,1.001-2.47,2.265c-0.596-0.129-1.245-0.121-1.928,0.13c-1.306,0.48-2.236,1.683-2.29,3.047c-0.077,1.937,1.504,3.532,3.467,3.532c0.149,0,0.673,0,0.794,0h7.204 M36.245,72.487h0.327"></path><path fill="#472b29" d="M45.341,72.987h-3.215c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h3.215c1.637,0,2.969-1.299,2.969-2.896c0-1.363-0.991-2.554-2.356-2.833c-0.256-0.052-0.429-0.293-0.396-0.552c0.016-0.123,0.027-0.247,0.027-0.374c0-1.664-1.388-3.017-3.093-3.017c-0.977,0-1.877,0.44-2.47,1.207c-0.126,0.164-0.341,0.233-0.539,0.173c-0.198-0.059-0.339-0.234-0.355-0.44c-0.071-0.913-0.507-1.741-1.227-2.332c-0.742-0.609-1.687-0.883-2.665-0.764c-1.475,0.177-2.694,1.292-2.963,2.712c-0.084,0.443-0.081,0.887,0.008,1.317c0.046,0.219-0.06,0.441-0.257,0.545c-0.198,0.104-0.44,0.063-0.595-0.099c-0.38-0.401-0.896-0.622-1.452-0.622c-1.038,0-1.903,0.79-1.971,1.799c-0.01,0.145-0.082,0.278-0.198,0.366c-0.116,0.088-0.265,0.119-0.406,0.089c-0.573-0.125-1.111-0.087-1.65,0.111c-1.129,0.415-1.917,1.459-1.963,2.598c-0.031,0.782,0.252,1.526,0.799,2.096c0.568,0.591,1.337,0.916,2.167,0.916h7.998c0.276,0,0.5,0.224,0.5,0.5s-0.224,0.5-0.5,0.5h-7.998c-1.089,0-2.142-0.446-2.888-1.224c-0.737-0.767-1.12-1.771-1.078-2.828c0.061-1.538,1.113-2.943,2.617-3.496c0.548-0.201,1.115-0.276,1.688-0.228c0.332-1.268,1.507-2.198,2.882-2.198c0.431,0,0.854,0.094,1.24,0.269c0.011-0.199,0.035-0.397,0.073-0.597c0.35-1.844,1.924-3.291,3.827-3.519c1.249-0.149,2.462,0.2,3.418,0.984c0.668,0.548,1.147,1.254,1.399,2.047c0.717-0.568,1.61-0.882,2.557-0.882c2.257,0,4.093,1.802,4.093,4.017c0,0.02,0,0.04,0,0.06c1.603,0.52,2.726,2.011,2.726,3.7C49.31,71.239,47.53,72.987,45.341,72.987z M36.571,72.987h-0.327c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h0.327c0.276,0,0.5,0.224,0.5,0.5S36.847,72.987,36.571,72.987z"></path><path fill="#472b29" d="M43.79 67.695c-.018 0-.036-.002-.055-.006-.135-.03-.219-.164-.189-.299.035-.153.087-.301.157-.441.555-1.123 2.084-1.537 3.409-.924.125.058.18.207.122.332-.058.125-.206.179-.332.122-1.081-.501-2.315-.19-2.751.692-.052.104-.091.214-.116.328C44.008 67.615 43.905 67.695 43.79 67.695zM39.106 72.987h-1.005c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h1.005c.276 0 .5.224.5.5S39.382 72.987 39.106 72.987z"></path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 100 100">
                    <path fill="#c7ede6" d="M88.724,55.551c0.3-0.616,0.566-1.264,0.796-1.943c2.633-7.77-1.349-17.078-9.733-19.325C78.881,22.9,70.881,15.09,61.846,13.758c-10.341-1.525-19.814,5.044-22.966,15.485c-3.799-1.346-7.501-1.182-10.99,0.857c-1.583,0.732-3.031,1.812-4.33,3.233c-1.907,2.086-3.147,4.719-3.652,7.495c-0.748,0.118-1.483,0.236-2.176,0.484c-4.04,1.449-6.589,4.431-7.288,8.923c-0.435,2.797,0.443,5.587,0.933,6.714c1.935,4.455,6.422,6.98,10.981,6.312c0.227-0.033,0.557,0.069,0.752,0.233c0.241,7.12,3.698,13.417,8.884,17.014c8.321,5.772,19.027,3.994,25.781-3.921c2.894,2.96,6.338,4.398,10.384,3.876c4.023-0.519,7.147-2.739,9.426-6.349c1.053,0.283,2.051,0.691,3.083,0.804c4.042,0.442,7.324-1.165,9.732-4.8c0.922-1.391,1.794-3.194,1.793-6.354C92.194,60.508,90.901,57.54,88.724,55.551z"></path><path fill="#fff" d="M18.389 47.587H8.358c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h10.031c.276 0 .5.224.5.5S18.666 47.587 18.389 47.587zM21.27 47.587h-1.446c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h1.446c.276 0 .5.224.5.5S21.546 47.587 21.27 47.587zM25.325 47.587h-2.546c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h2.546c.276 0 .5.224.5.5S25.601 47.587 25.325 47.587zM25.325 49.452h-9.616c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h9.616c.276 0 .5.224.5.5S25.601 49.452 25.325 49.452zM13.977 49.452h-.58c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h.58c.276 0 .5.224.5.5S14.253 49.452 13.977 49.452zM11.6 49.452h-1.457c-.276 0-.5-.224-.5-.5s.224-.5.5-.5H11.6c.276 0 .5.224.5.5S11.876 49.452 11.6 49.452zM20.736 45.722h-5.027c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h5.027c.276 0 .5.224.5.5S21.012 45.722 20.736 45.722zM20.736 43.857h-1.257c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h1.257c.276 0 .5.224.5.5S21.012 43.857 20.736 43.857zM17.467 51.316h-1.759c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h1.759c.276 0 .5.224.5.5S17.744 51.316 17.467 51.316zM74.415 25.266h-10.03c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h10.03c.276 0 .5.224.5.5S74.691 25.266 74.415 25.266zM77.296 25.266h-1.446c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h1.446c.276 0 .5.224.5.5S77.573 25.266 77.296 25.266zM81.351 25.266h-2.546c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h2.546c.276 0 .5.224.5.5S81.627 25.266 81.351 25.266zM81.351 27.131h-9.616c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h9.616c.276 0 .5.224.5.5S81.627 27.131 81.351 27.131zM70.003 27.131h-.58c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h.58c.276 0 .5.224.5.5S70.279 27.131 70.003 27.131zM67.626 27.131H66.17c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h1.456c.276 0 .5.224.5.5S67.902 27.131 67.626 27.131zM76.762 23.401h-5.027c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h5.027c.276 0 .5.224.5.5S77.038 23.401 76.762 23.401zM76.762 21.537h-1.257c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h1.257c.276 0 .5.224.5.5S77.038 21.537 76.762 21.537zM73.493 28.996h-1.759c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h1.759c.276 0 .5.224.5.5S73.77 28.996 73.493 28.996z"></path><path fill="#fdfcef" d="M74.986,48.42c0,0,10.616,0,10.681,0c2.452,0,4.439-1.987,4.439-4.439c0-2.139-1.513-3.924-3.527-4.344c0.023-0.187,0.039-0.377,0.039-0.57c0-2.539-2.058-4.598-4.597-4.598c-1.499,0-2.827,0.721-3.666,1.831c-0.215-2.826-2.739-5.007-5.693-4.646c-2.16,0.264-3.947,1.934-4.344,4.073c-0.127,0.686-0.114,1.352,0.013,1.977c-0.579-0.624-1.403-1.016-2.322-1.016c-1.68,0-3.052,1.308-3.16,2.961c-0.763-0.169-1.593-0.158-2.467,0.17c-1.671,0.627-2.861,2.2-2.93,3.983c-0.099,2.533,1.925,4.617,4.435,4.617c0.191,0,0.861,0,1.015,0h9.218"></path><path fill="#472b29" d="M85.666,48.92H74.985c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h10.681c2.172,0,3.939-1.767,3.939-3.938c0-1.855-1.316-3.477-3.129-3.855c-0.254-0.053-0.425-0.292-0.394-0.55c0.021-0.168,0.035-0.337,0.035-0.51c0-2.26-1.838-4.098-4.098-4.098c-1.292,0-2.483,0.595-3.267,1.633c-0.125,0.166-0.339,0.237-0.54,0.178c-0.199-0.059-0.342-0.234-0.357-0.441c-0.094-1.238-0.7-2.401-1.663-3.19c-0.973-0.797-2.207-1.151-3.471-0.997c-1.947,0.238-3.556,1.746-3.913,3.669c-0.112,0.6-0.108,1.201,0.011,1.786c0.044,0.22-0.062,0.442-0.262,0.545c-0.198,0.103-0.442,0.059-0.595-0.105c-0.512-0.553-1.206-0.856-1.955-0.856c-1.4,0-2.569,1.096-2.661,2.493c-0.01,0.146-0.082,0.28-0.199,0.368c-0.117,0.087-0.268,0.118-0.408,0.088c-0.756-0.167-1.47-0.117-2.183,0.149c-1.499,0.563-2.546,1.984-2.606,3.536c-0.042,1.083,0.347,2.108,1.096,2.888c0.75,0.779,1.758,1.209,2.839,1.209H72.12c0.276,0,0.5,0.224,0.5,0.5s-0.224,0.5-0.5,0.5H61.886c-1.356,0-2.62-0.538-3.56-1.516c-0.939-0.978-1.428-2.263-1.375-3.62c0.076-1.948,1.383-3.729,3.254-4.433c0.72-0.271,1.463-0.362,2.221-0.279c0.362-1.654,1.842-2.884,3.582-2.884c0.603,0,1.194,0.151,1.72,0.432c0.004-0.327,0.036-0.656,0.097-0.984c0.436-2.347,2.4-4.188,4.775-4.478c1.536-0.191,3.039,0.243,4.226,1.216c0.899,0.737,1.543,1.742,1.847,2.851c0.919-0.808,2.095-1.256,3.347-1.256c2.811,0,5.098,2.287,5.098,5.098c0,0.064-0.001,0.128-0.004,0.192c2.047,0.628,3.492,2.547,3.492,4.723C90.605,46.704,88.389,48.92,85.666,48.92z"></path><path fill="#fdfcef" d="M72.413,38.641c-1.642-0.108-3.055,1.026-3.157,2.533c-0.013,0.187-0.004,0.371,0.023,0.55c-0.317-0.358-0.786-0.6-1.324-0.636c-0.985-0.065-1.836,0.586-1.959,1.471c-0.179-0.049-0.366-0.082-0.56-0.095c-1.437-0.094-2.674,0.898-2.762,2.216"></path><path fill="#472b29" d="M62.675,44.931c-0.006,0-0.012,0-0.017-0.001c-0.138-0.009-0.242-0.128-0.233-0.266c0.098-1.453,1.446-2.569,3.028-2.449c0.117,0.007,0.235,0.022,0.353,0.044c0.26-0.877,1.163-1.501,2.166-1.42c0.376,0.024,0.73,0.138,1.035,0.329c0-0.004,0-0.008,0-0.011c0.11-1.642,1.663-2.896,3.422-2.766c0.138,0.009,0.242,0.128,0.233,0.266c-0.009,0.138-0.128,0.254-0.266,0.232c-1.521-0.089-2.8,0.935-2.891,2.301c-0.011,0.166-0.004,0.332,0.021,0.495c0.017,0.109-0.041,0.218-0.141,0.265c-0.098,0.047-0.22,0.022-0.293-0.061c-0.285-0.322-0.706-0.523-1.153-0.553c-0.848-0.041-1.59,0.497-1.696,1.256c-0.01,0.071-0.05,0.135-0.11,0.175S66,42.82,65.93,42.8c-0.17-0.046-0.341-0.075-0.51-0.087c-1.298-0.062-2.417,0.806-2.497,1.984C62.915,44.83,62.805,44.931,62.675,44.931z"></path><path fill="#fdfcef" d="M87.464,40.157c-1.543-0.727-3.327-0.213-3.985,1.15c-0.082,0.169-0.142,0.344-0.182,0.521"></path><path fill="#472b29" d="M83.296,42.078c-0.018,0-0.037-0.002-0.055-0.006c-0.135-0.031-0.219-0.165-0.188-0.3c0.044-0.197,0.112-0.39,0.201-0.573c0.716-1.483,2.654-2.052,4.317-1.269c0.125,0.06,0.179,0.208,0.12,0.333c-0.059,0.126-0.209,0.176-0.333,0.12c-1.417-0.669-3.056-0.205-3.654,1.032c-0.072,0.149-0.127,0.307-0.164,0.468C83.514,41.999,83.41,42.078,83.296,42.078z"></path><path fill="#4985c1" d="M65.281,69.848H39.559c-3.766,0-6.847-3.081-6.847-6.847V37.279c0-3.766,3.081-6.847,6.847-6.847h25.722c3.766,0,6.847,3.081,6.847,6.847v25.722C72.128,66.767,69.047,69.848,65.281,69.848z"></path><path fill="#472b29" d="M65.281,70.548H39.559c-4.162,0-7.547-3.386-7.547-7.548V37.279c0-4.162,3.386-7.548,7.547-7.548h25.722c4.162,0,7.547,3.386,7.547,7.548v25.722C72.828,67.163,69.442,70.548,65.281,70.548z M39.559,31.131c-3.39,0-6.147,2.758-6.147,6.147v25.722c0,3.39,2.757,6.147,6.147,6.147h25.722c3.39,0,6.147-2.758,6.147-6.147V37.279c0-3.39-2.757-6.147-6.147-6.147H39.559z"></path><path fill="#fdfcee" d="M63.764,67.033H41.076c-3.052,0-5.549-2.497-5.549-5.549V38.796c0-3.052,2.497-5.549,5.549-5.549h22.688c3.052,0,5.549,2.497,5.549,5.549v22.688C69.313,64.536,66.816,67.033,63.764,67.033z"></path><path fill="#472b29" d="M64.178,67.382H40.661c-3.024,0-5.484-2.46-5.484-5.483V38.382c0-3.024,2.46-5.484,5.484-5.484h22.395c0.193,0,0.35,0.156,0.35,0.35s-0.157,0.35-0.35,0.35H40.661c-2.638,0-4.784,2.146-4.784,4.785v23.518c0,2.638,2.146,4.784,4.784,4.784h23.517c2.638,0,4.784-2.146,4.784-4.784V48.888c0-0.193,0.157-0.35,0.35-0.35s0.35,0.156,0.35,0.35v13.011C69.663,64.923,67.202,67.382,64.178,67.382z"></path><path fill="#472b29" d="M69.312 47.361c-.193 0-.35-.156-.35-.35v-2.502c0-.193.157-.35.35-.35s.35.156.35.35v2.502C69.663 47.205 69.506 47.361 69.312 47.361zM69.312 43.607c-.193 0-.35-.156-.35-.35v-1.251c0-.193.157-.35.35-.35s.35.156.35.35v1.251C69.663 43.451 69.506 43.607 69.312 43.607z"></path><path fill="#4985c1" d="M49.57,44.441c0,0.544,0,2.763,0,2.763h-1.9v3.166h1.9v10.132h4.433V50.37h2.604c0,0,0.244-1.511,0.361-3.166c-0.34,0-3.599,0-3.599,0s0-1.992,0-2.343c0-0.35,0.459-0.824,0.913-0.824s1.978,0,2.886,0c0-0.499,0-2.212,0-3.799c-1.208,0-2.585,0-3.188,0C49.464,40.243,49.57,43.896,49.57,44.441z"></path><path fill="#472b29" d="M54.003,60.851H49.57c-0.193,0-0.35-0.156-0.35-0.35v-9.782h-1.55c-0.193,0-0.35-0.156-0.35-0.35v-3.166c0-0.193,0.157-0.35,0.35-0.35h1.55V44.44h0.35l-0.35-0.035c-0.005-1.382,0.391-2.481,1.176-3.271c0.821-0.825,2.027-1.245,3.584-1.246h3.188c0.193,0,0.35,0.156,0.35,0.35v3.8c0,0.193-0.157,0.35-0.35,0.35h-2.886c-0.275,0-0.563,0.329-0.563,0.474v1.993h3.249c0.097,0,0.19,0.04,0.256,0.111c0.066,0.071,0.1,0.166,0.093,0.263c-0.117,1.652-0.362,3.182-0.365,3.197c-0.027,0.17-0.174,0.294-0.346,0.294h-2.254v9.782C54.353,60.695,54.196,60.851,54.003,60.851z M49.92,60.152h3.732V50.37c0-0.193,0.157-0.35,0.35-0.35h2.303c0.068-0.463,0.197-1.416,0.285-2.467H53.37c-0.193,0-0.35-0.156-0.35-0.35v-2.343c0-0.57,0.649-1.173,1.264-1.173h2.536v-3.101h-2.838c-1.364,0.002-2.403,0.352-3.088,1.04c-0.649,0.652-0.977,1.586-0.972,2.774v0.038v2.764c0,0.193-0.157,0.35-0.35,0.35h-1.55v2.467h1.55c0.193,0,0.35,0.156,0.35,0.35V60.152z"></path><path fill="#fdfcef" d="M42.147,72.361c1.71,0,3.194,0,3.215,0c1.916,0,3.469-1.52,3.469-3.396c0-1.636-1.182-3.001-2.756-3.323c0.018-0.143,0.031-0.288,0.031-0.436c0-1.942-1.609-3.517-3.593-3.517c-1.172,0-2.209,0.551-2.865,1.401c-0.168-2.162-2.141-3.83-4.45-3.554c-1.688,0.202-3.084,1.479-3.395,3.116c-0.1,0.525-0.089,1.034,0.01,1.512c-0.453-0.477-1.097-0.777-1.814-0.777c-1.313,0-2.385,1.001-2.47,2.265c-0.596-0.129-1.245-0.121-1.928,0.13c-1.306,0.48-2.236,1.683-2.29,3.047c-0.077,1.937,1.504,3.532,3.467,3.532c0.149,0,0.673,0,0.794,0h7.204 M36.265,72.361h0.327"></path><path fill="#472b29" d="M45.362,72.861h-3.215c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h3.215c1.637,0,2.969-1.299,2.969-2.896c0-1.362-0.991-2.554-2.356-2.833c-0.256-0.053-0.429-0.293-0.396-0.553c0.016-0.123,0.026-0.247,0.026-0.374c0-1.663-1.388-3.017-3.093-3.017c-0.977,0-1.877,0.439-2.469,1.207c-0.127,0.164-0.342,0.23-0.539,0.174c-0.198-0.06-0.339-0.234-0.355-0.44c-0.071-0.913-0.507-1.741-1.227-2.333c-0.743-0.608-1.689-0.877-2.665-0.764c-1.476,0.177-2.694,1.292-2.963,2.712c-0.084,0.443-0.081,0.887,0.008,1.318c0.045,0.219-0.06,0.441-0.258,0.545c-0.198,0.103-0.44,0.063-0.595-0.1c-0.379-0.4-0.895-0.621-1.451-0.621c-1.038,0-1.903,0.79-1.971,1.798c-0.01,0.146-0.082,0.279-0.198,0.366c-0.116,0.087-0.265,0.122-0.406,0.089c-0.571-0.122-1.109-0.087-1.65,0.112c-1.128,0.414-1.917,1.458-1.963,2.598c-0.031,0.781,0.253,1.525,0.8,2.095c0.568,0.591,1.338,0.916,2.167,0.916h7.998c0.276,0,0.5,0.224,0.5,0.5s-0.224,0.5-0.5,0.5h-7.998c-1.088,0-2.141-0.446-2.888-1.224c-0.737-0.767-1.12-1.771-1.078-2.827c0.062-1.539,1.113-2.944,2.617-3.497c0.548-0.201,1.112-0.278,1.688-0.229c0.332-1.268,1.507-2.197,2.882-2.197c0.431,0,0.855,0.094,1.241,0.269c0.01-0.199,0.035-0.398,0.072-0.597c0.35-1.844,1.923-3.291,3.827-3.519c1.248-0.156,2.463,0.2,3.418,0.983c0.668,0.548,1.147,1.255,1.399,2.047c0.718-0.568,1.61-0.882,2.557-0.882c2.257,0,4.093,1.802,4.093,4.017c0,0.02,0,0.04,0,0.06c1.604,0.52,2.727,2.012,2.727,3.7C49.331,71.114,47.55,72.861,45.362,72.861z M36.592,72.861h-0.327c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h0.327c0.276,0,0.5,0.224,0.5,0.5S36.868,72.861,36.592,72.861z"></path><path fill="#472b29" d="M43.811 67.568c-.018 0-.036-.002-.055-.006-.135-.03-.219-.164-.189-.299.034-.15.086-.299.156-.439.554-1.123 2.083-1.539 3.41-.925.125.058.18.206.122.331-.058.126-.207.179-.332.122-1.081-.497-2.316-.188-2.752.692-.052.105-.091.216-.116.328C44.029 67.489 43.926 67.568 43.811 67.568zM39.126 72.861h-1.005c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h1.005c.276 0 .5.224.5.5S39.403 72.861 39.126 72.861z"></path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 100 100">
                    <path fill="#c7ede6" d="M87.2,56.7c1.1-2.2,1.8-4.6,1.8-7.2c0-6.6-4.2-12.3-10-14.5c0,0,0,0,0,0c0-11.6-9.4-21-21-21 c-9.8,0-18,6.7-20.3,15.8c-1.5-0.5-3-0.8-4.7-0.8c-7.7,0-14,5.8-14.9,13.3C12.9,43.4,9,48,9,53.5C9,59.9,14.1,65,20.5,65 c0.2,0,0.4,0,0.5,0c0,0.2,0,0.3,0,0.5C21,76.8,30.2,86,41.5,86c6.4,0,12.2-3,15.9-7.6c2.2,2.2,5.2,3.6,8.6,3.6 c4.7,0,8.7-2.7,10.7-6.5c1.1,0.3,2.2,0.5,3.3,0.5c6.1,0,11-4.9,11-11C91,61.7,89.5,58.7,87.2,56.7z"></path><path fill="#fdfcef" d="M76.5,70.5V71h3v-0.5c0,0,4.2,0,5.5,0c2.5,0,4.5-2,4.5-4.5c0-2.3-1.8-4.2-4.1-4.5c0-0.2,0.1-0.4,0.1-0.5 c0-2.5-2-4.5-4.5-4.5c-1.4,0-2.7,0.7-3.5,1.7c-0.1-2.6-2.3-4.7-5-4.7c-2.8,0-5,2.2-5,5c0,0.4,0.1,0.9,0.2,1.3 C67,59,66.1,58.5,65,58.5c-1.8,0-3.2,1.3-3.5,3.1c-0.2,0-0.4-0.1-0.5-0.1c-2.5,0-4.5,2-4.5,4.5s2,4.5,4.5,4.5s9.5,0,9.5,0H76.5z"></path><path fill="#472b29" d="M72.5,53c-3,0-5.5,2.5-5.5,5.5c0,0,0,0,0,0c-0.6-0.4-1.3-0.5-2-0.5c-1.8,0-3.4,1.3-3.9,3c0,0-0.1,0-0.1,0 c-2.8,0-5,2.2-5,5c0,2.8,2.2,5,5,5h15.5c0.3,0,0.5-0.2,0.5-0.5S76.8,70,76.5,70H61c-2.2,0-4-1.8-4-4s1.8-4,4-4c0.1,0,0.2,0,0.3,0 l0.1,0c0,0,0,0,0.1,0c0.2,0,0.5-0.2,0.5-0.4c0.2-1.5,1.5-2.6,3-2.6c0.9,0,1.7,0.4,2.3,1.1c0.1,0.1,0.2,0.2,0.4,0.2 c0.1,0,0.2,0,0.2-0.1c0.2-0.1,0.3-0.3,0.3-0.6c-0.1-0.4-0.2-0.8-0.2-1.2c0-2.5,2-4.5,4.5-4.5c2.4,0,4.3,1.9,4.5,4.3 c0,0.2,0.2,0.4,0.3,0.5c0.1,0,0.1,0,0.2,0c0.2,0,0.3-0.1,0.4-0.2c0.8-1,1.9-1.5,3.1-1.5c2.2,0,4,1.8,4,4c0,0.1,0,0.2,0,0.3l0,0.1 c0,0.1,0,0.3,0.1,0.4s0.2,0.2,0.3,0.2c2.1,0.2,3.6,1.9,3.6,4c0,2.2-1.8,4-4,4h-5.5c-0.3,0-0.5,0.2-0.5,0.5s0.2,0.5,0.5,0.5H85 c2.8,0,5-2.2,5-5c0-2.4-1.7-4.4-4-4.9c0,0,0-0.1,0-0.1c0-2.8-2.2-5-5-5c-1.2,0-2.3,0.4-3.2,1.2C77.2,54.8,75.1,53,72.5,53L72.5,53 z"></path><path fill="#472b29" d="M71 60c-1.4 0-2.6 1-2.9 2.3-.4-.2-.8-.3-1.2-.3-1.2 0-2.2.9-2.4 2.1-.2 0-.4-.1-.6-.1-1.5 0-2.8 1.2-2.9 2.7 0 .1.1.3.2.3 0 0 0 0 0 0 .1 0 .2-.1.2-.2.1-1.3 1.2-2.3 2.4-2.3.2 0 .5 0 .7.1 0 0 0 0 .1 0 .1 0 .1 0 .2-.1.1 0 .1-.1.1-.2 0-1 .8-1.9 1.9-1.9.4 0 .9.2 1.2.5 0 0 .1.1.2.1 0 0 .1 0 .1 0 .1 0 .1-.1.2-.2.1-1.3 1.2-2.3 2.5-2.3.2 0 .4 0 .7.1 0 0 0 0 .1 0 .1 0 .2-.1.2-.2 0-.1 0-.3-.2-.3C71.5 60 71.3 60 71 60L71 60zM84.9 61.5c-1.3 0-2.5.9-2.9 2.2 0 .1 0 .3.2.3 0 0 0 0 .1 0 .1 0 .2-.1.2-.2.3-1.1 1.3-1.8 2.4-1.8.1 0 .2 0 .3 0 0 0 0 0 0 0 .1 0 .2-.1.2-.2 0-.1-.1-.3-.2-.3C85.2 61.5 85 61.5 84.9 61.5L84.9 61.5z"></path><path fill="#fff" d="M33.5 80h-10c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h10c.3 0 .5.2.5.5S33.8 80 33.5 80zM36.5 80h-1c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h1c.3 0 .5.2.5.5S36.8 80 36.5 80zM41.5 82h-9c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h9c.3 0 .5.2.5.5S41.8 82 41.5 82zM30.5 82h-1c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h1c.3 0 .5.2.5.5S30.8 82 30.5 82zM27.5 82h-2c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h2c.3 0 .5.2.5.5S27.8 82 27.5 82zM33.5 84h-2c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h2c.3 0 .5.2.5.5S33.8 84 33.5 84zM36.5 75c-.2 0-.8 0-1 0-.3 0-.5.2-.5.5s.2.5.5.5c.2 0 .8 0 1 0 .3 0 .5-.2.5-.5S36.8 75 36.5 75zM36.5 77c-.2 0-4.8 0-5 0-.3 0-.5.2-.5.5s.2.5.5.5c.2 0 4.8 0 5 0 .3 0 .5-.2.5-.5S36.8 77 36.5 77zM41.5 79c-.2 0-2.8 0-3 0-.3 0-.5.2-.5.5s.2.5.5.5c.2 0 2.8 0 3 0 .3 0 .5-.2.5-.5S41.8 79 41.5 79z"></path><g><path fill="#fff" d="M72.5 24h-10c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h10c.3 0 .5.2.5.5S72.8 24 72.5 24zM76.5 24h-2c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h2c.3 0 .5.2.5.5S76.8 24 76.5 24zM81.5 26h-10c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h10c.3 0 .5.2.5.5S81.8 26 81.5 26zM69.5 26h-1c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h1c.3 0 .5.2.5.5S69.8 26 69.5 26zM66.5 26h-2c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h2c.3 0 .5.2.5.5S66.7 26 66.5 26zM75.5 22h-5c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h5c.3 0 .5.2.5.5S75.8 22 75.5 22zM72.5 28h-2c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h2c.3 0 .5.2.5.5S72.8 28 72.5 28z"></path></g><g><path fill="#add4a1" d="M52.5,26C39.5,26,29,36.5,29,49.5c0,4.5,1.2,8.6,3.4,12.2L29,72.1l10.1-3.3c3.8,2.7,8.4,4.2,13.4,4.2 C65.5,73,76,62.5,76,49.5S65.5,26,52.5,26z"></path><path fill="#472b29" d="M52.5,73.7c-4.9,0-9.5-1.4-13.5-4.1l-9.7,3.2c-0.3,0.1-0.5,0-0.7-0.2c-0.2-0.2-0.3-0.5-0.2-0.7l3.3-10.1 c-2.2-3.7-3.3-7.9-3.3-12.3c0-13.3,10.9-24.2,24.2-24.2s24.2,10.9,24.2,24.2S65.8,73.7,52.5,73.7z M39.1,68.1c0.1,0,0.3,0,0.4,0.1 c3.8,2.7,8.3,4.1,13,4.1c12.6,0,22.8-10.2,22.8-22.8c0-12.6-10.2-22.8-22.8-22.8c-12.6,0-22.8,10.2-22.8,22.8 c0,4.2,1.1,8.3,3.3,11.8c0.1,0.2,0.1,0.4,0.1,0.6L30.1,71l8.7-2.9C38.9,68.1,39,68.1,39.1,68.1z"></path></g><path fill="#5aba9e" d="M67.6,38.1c-3.5-4.5-8.9-7.5-15.1-7.5c-10.4,0-18.9,8.5-18.9,18.9c0,3.9,1.2,7.6,3.3,10.6l-2,6.2l6-1.9 c3.2,2.5,7.3,4.1,11.7,4.1c10.4,0,18.9-8.5,18.9-18.9c0-1.1-0.1-2.1-0.3-3.2"></path><path fill="#472b29" d="M52.5,68.9c-4.3,0-8.4-1.4-11.8-4L35,66.8c-0.2,0.1-0.4,0-0.5-0.1c-0.1-0.1-0.2-0.3-0.1-0.5l1.9-6 c-2.1-3.2-3.2-6.9-3.2-10.7c0-10.7,8.7-19.4,19.4-19.4c6.1,0,11.8,2.8,15.5,7.7c0.2,0.2,0.1,0.5-0.1,0.7c-0.2,0.2-0.5,0.1-0.7-0.1 c-3.5-4.6-8.9-7.3-14.7-7.3c-10.1,0-18.4,8.3-18.4,18.4c0,3.7,1.1,7.3,3.2,10.3c0.1,0.1,0.1,0.3,0.1,0.4l-1.7,5.3l5-1.6 c0.2-0.1,0.3,0,0.5,0.1c3.3,2.6,7.2,4,11.4,4c10.1,0,18.4-8.3,18.4-18.4c0-1-0.1-2.1-0.3-3.1c0-0.3,0.1-0.5,0.4-0.6 c0.3,0,0.5,0.1,0.6,0.4c0.2,1.1,0.3,2.2,0.3,3.2C71.9,60.2,63.2,68.9,52.5,68.9z"></path><g><path fill="#5aba9e" d="M70.5,43.6c-0.4-1.1-0.9-2.2-1.4-3.3"></path><path fill="#472b29" d="M70.5,44.1c-0.2,0-0.4-0.1-0.5-0.3c-0.4-1.1-0.8-2.2-1.4-3.2c-0.1-0.2,0-0.5,0.2-0.7c0.2-0.1,0.5,0,0.7,0.2 c0.6,1.1,1.1,2.2,1.5,3.3c0.1,0.3-0.1,0.5-0.3,0.6C70.6,44.1,70.5,44.1,70.5,44.1z"></path></g><g><path fill="#fdfcee" d="M60.1,59.6c-1.4,0-3.4-0.5-6.3-1.7c-3.8-1.5-7.6-4.6-10.7-8.8l-0.2-0.2c-0.9-1.2-2.5-3.6-2.5-6 c-0.1-1.8,0.7-3.6,2.2-4.8c0.5-0.4,1.2-0.6,1.8-0.6l0.2,0l0.7,0c0,0,0.1,0,0.2,0s0.1,0,0.2,0c0.1,0,0.2,0.1,0.3,0.2 c0.2,0.2,0.3,0.4,0.4,0.7l0.8,1.7c0.6,1.4,1.1,2.5,1.2,2.7c0.1,0.1,0.3,0.5,0.1,0.9c-0.2,0.3-0.4,0.6-0.6,0.8 c-0.1,0.2-0.2,0.3-0.4,0.4l-0.1,0.1c-0.1,0.1-0.4,0.4-0.6,0.6c-0.5,0.5-0.6,1.1-0.3,1.6c1,1.6,2.2,3,3.7,4.2 c1.5,1.3,3.2,2.3,5.1,3l0.2,0.1c0.2,0.1,0.5,0.2,0.8,0.2c0.5,0,0.9-0.2,1.2-0.5c0.5-0.5,1-1.2,1.5-1.8l0.3-0.4 c0.1-0.1,0.3-0.4,0.7-0.4c0.1,0,0.3,0,0.4,0.1c0.5,0.2,3.3,1.4,4.3,1.9l0.4,0.2l0.5,0.2c0.2,0.1,0.3,0.2,0.3,0.4 c0,0.9-0.1,1.7-0.4,2.5c-0.5,1.2-2.5,2.4-4.1,2.7C61,59.5,60.6,59.6,60.1,59.6z"></path><path fill="#472b29" d="M45.4,38c0.1,0,0.1,0,0.2,0c0.1,0.1,0.2,0.3,0.3,0.5l0.6,1.3c0.8,1.7,1.3,3,1.4,3.2s0.1,0.3,0.1,0.4 c-0.1,0.3-0.3,0.5-0.5,0.7l-0.1,0.1c-0.1,0.1-0.3,0.3-0.4,0.4c-0.1,0.1-0.4,0.4-0.6,0.6c-0.7,0.6-0.8,1.5-0.3,2.2 c1,1.6,2.3,3.1,3.8,4.3c1.5,1.3,3.3,2.3,5.2,3l0.2,0.1c0.3,0.1,0.6,0.2,0.9,0.2c0.6,0,1.2-0.2,1.6-0.6c0.5-0.6,1.1-1.2,1.5-1.8 l0.3-0.4c0.1-0.1,0.2-0.2,0.3-0.2c0.1,0,0.2,0,0.3,0.1c0.5,0.2,3.2,1.4,4.3,1.9l0.4,0.2l0.5,0.2c0,0.8-0.1,1.6-0.4,2.3 c-0.4,1.1-2.2,2.1-3.7,2.4c-0.3,0.1-0.6,0.1-1.1,0.1c-1,0-2.7-0.3-6.2-1.6c-3.7-1.4-7.5-4.5-10.5-8.6l-0.2-0.2 c-0.9-1.2-2.4-3.4-2.4-5.7c-0.1-1.7,0.7-3.3,2-4.5c0.4-0.3,1-0.5,1.5-0.5c0,0,0.1,0,0.1,0c0.3,0,0.5,0,0.7,0 C45.2,38,45.3,38,45.4,38 M45.4,37c-0.1,0-0.1,0-0.2,0h-0.6c-0.1,0-0.1,0-0.2,0c-0.8,0-1.5,0.3-2.1,0.7c0,0,0,0,0,0 c-1.6,1.3-2.4,3.3-2.4,5.2c0,2.5,1.7,5,2.7,6.3l0.2,0.2c3.1,4.2,7,7.4,10.9,8.9c3,1.2,5.1,1.7,6.5,1.7c0.6,0,1-0.1,1.3-0.1 c1.7-0.3,3.9-1.5,4.4-3c0.3-0.8,0.5-1.8,0.5-2.7c0-0.4-0.3-0.7-0.6-0.9l-0.5-0.2L64.8,53c-0.9-0.4-3.8-1.8-4.4-2 c-0.1,0-0.3-0.1-0.6-0.1c-0.7,0-1,0.5-1.1,0.6l-0.3,0.4c-0.5,0.6-0.9,1.2-1.4,1.7c-0.2,0.2-0.5,0.3-0.9,0.3c-0.2,0-0.4,0-0.5-0.1 l-0.2-0.1c-1.8-0.7-3.5-1.6-4.9-2.9c-1.4-1.2-2.6-2.6-3.6-4.1c-0.2-0.3-0.1-0.7,0.1-0.9c0,0,0.1-0.1,0.1-0.1 c0.2-0.2,0.4-0.4,0.5-0.6l0.1-0.1c0.1-0.1,0.2-0.2,0.3-0.3l0,0c0.3-0.3,0.5-0.6,0.7-0.9c0.2-0.3,0.3-0.8-0.1-1.4 c-0.1-0.2-0.6-1.3-1.2-2.6l-0.2-0.5l-0.6-1.3c-0.1-0.3-0.3-0.6-0.5-0.8c-0.2-0.2-0.4-0.3-0.6-0.3C45.5,37,45.4,37,45.4,37L45.4,37 z"></path></g><g><path fill="#fdfcef" d="M32.5,56.5c0,0,1.6,0,3.5,0s3.5-1.6,3.5-3.5c0-1.8-1.3-3.2-3.1-3.5c0-0.2,0.1-0.4,0.1-0.5 c0-1.9-1.6-3.5-3.5-3.5c-1,0-2,0.5-2.6,1.2c-0.4-1.8-2-3.2-3.9-3.2c-2.2,0-4,1.8-4,4c0,0.2,0,0.4,0.1,0.6c-0.4-0.3-1-0.6-1.6-0.6 c-1.2,0-2.2,0.9-2.5,2.1c-0.2,0-0.4-0.1-0.5-0.1c-1.9,0-3.5,1.6-3.5,3.5s1.6,3.5,3.5,3.5s7.5,0,7.5,0V57h7V56.5z"></path><path fill="#472b29" d="M34.3 52c-.1 0-.3-.1-.3-.3 0-1.2 1-2.2 2.2-2.2 0 0 .7 0 1.2.1.1 0 .2.2.2.3 0 .1-.2.2-.3.2C36.9 50 36.2 50 36.2 50c-.9 0-1.7.8-1.7 1.7C34.5 51.9 34.4 52 34.3 52zM27.5 56A.5.5 0 1 0 27.5 57 .5.5 0 1 0 27.5 56z"></path><path fill="#472b29" d="M36,57h-3.5c-0.3,0-0.5-0.2-0.5-0.5s0.2-0.5,0.5-0.5H36c1.7,0,3-1.3,3-3c0-1.5-1.1-2.8-2.6-3 c-0.1,0-0.3-0.1-0.3-0.2s-0.1-0.2-0.1-0.4c0-0.2,0-0.3,0-0.5c0-1.7-1.3-3-3-3c-0.8,0-1.6,0.4-2.2,1c-0.1,0.1-0.3,0.2-0.5,0.1 c-0.2,0-0.3-0.2-0.4-0.4c-0.3-1.6-1.8-2.8-3.4-2.8c-1.9,0-3.5,1.6-3.5,3.5c0,0.1,0,0.3,0,0.4c0,0.2-0.1,0.4-0.2,0.5 s-0.4,0.1-0.6,0C21.9,48.2,21.4,48,21,48c-1,0-1.8,0.7-2,1.6c0,0.3-0.3,0.4-0.6,0.4c-0.2,0-0.3,0-0.5,0c-1.7,0-3,1.3-3,3 s1.3,3,3,3h7.5c0.3,0,0.5,0.2,0.5,0.5S25.8,57,25.5,57H18c-2.2,0-4-1.8-4-4s1.8-4,4-4c0.1,0,0.1,0,0.2,0c0.4-1.2,1.5-2,2.8-2 c0.3,0,0.7,0.1,1,0.2c0.2-2.3,2.1-4.2,4.5-4.2c1.8,0,3.5,1.1,4.2,2.8c0.7-0.5,1.5-0.8,2.3-0.8c2.2,0,4,1.8,4,4c0,0,0,0.1,0,0.1 c1.7,0.4,3,2,3,3.9C40,55.2,38.2,57,36,57z"></path><path fill="#472b29" d="M30.5,56c-0.2,0-0.8,0-1,0c-0.3,0-0.5,0.2-0.5,0.5s0.2,0.5,0.5,0.5c0.2,0,0.8,0,1,0c0.3,0,0.5-0.2,0.5-0.5 S30.8,56,30.5,56z"></path></g>
                </svg>
                </div>
                <p>Copyright &copy; - 2023 <a href="https://github.com/NSCapriz" target="_blank">Grupo 3</a> - All rights reserved</p>
            </div>
        </>
    )
}

export default Footer