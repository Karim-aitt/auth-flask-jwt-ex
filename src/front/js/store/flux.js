const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			nombre: null,
			auth: false,
			token: "tokenHi",
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			login: (email, password) => {
				fetch("https://3001-4geeksacade-reactflaskh-baz8qv3gkno.ws-eu47.gitpod.io/login", {
					method: 'POST',
					body: JSON.stringify({email, password}),
					headers: {
						'Content-Type': 'application/json'
					}
					
				})
				.then(res => {
					if (res.status == 200){
						setStore({auth: true})
						setStore({nombre: email})
					} else {
						alert("Usuario o clave incorrectas")
						return "Usuario o clave incorrectas"
					}
					return res.json()
				})
				.then(data => {
					localStorage.setItem("token", data)
					setStore({token: data})
				})
				.catch()
			},

			logout: () => {
				localStorage.removeItem("token")
				setStore({auth: false})
				setStore({nombre: null})
			},

			signup: (email, password) => {
				fetch("https://3001-4geeksacade-reactflaskh-baz8qv3gkno.ws-eu47.gitpod.io/signup",{
					method: 'POST',
					body: JSON.stringify({email, password}),
					headers: {
						'Content-Type': 'application/json'
					}
				})
				.then(res => {
					if (res.status == 200){
						setStore({auth: true}) 
						setStore({nombre: email})
						
					} else {
						alert("Este usuario ya existe")
						return "Este usuario ya existe"
					}
					return res.json()
				})
				.then(data =>{ 
					localStorage.setItem("token", data)
					setStore({token: data})
				})
			},

			private: () => {
				let tok = localStorage.getItem("token")
				if(tok == getStore().token){

				fetch("https://3001-4geeksacade-reactflaskh-baz8qv3gkno.ws-eu47.gitpod.io/private",{
					method: 'GET',
					headers: {
						"Content-Type": "application/json",
						"Authorization": "Bearer " + tok
					}
				})
				.then(res => {
					if(res.status == 200){
						console.log("Todo bien con el fetch en private")
					} else{
						console.log("Algo ha ido mal con el token y el require en el private Fetch")
						// return res.json()
					}

				})} else {
					return "Validation error flux 97"
				}

			},

			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: async () => {
				try{
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data
				}catch(error){
					console.log("Error loading message from backend", error)
				}
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
