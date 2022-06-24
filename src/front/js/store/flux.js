const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			nombre: null,
			auth: false,
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
				fetch("https://3001-4geeksacade-reactflaskh-baz8qv3gkno.ws-eu49.gitpod.io/login", {
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
				.then(data => sessionStorage.setItem("token", data))
				.catch()
			},

			logout: () => {
				sessionStorage.removeItem("token")
				setStore({auth: false})
				setStore({nombre: null})
			},

			signup: (email, password) => {
				fetch("https://3001-4geeksacade-reactflaskh-baz8qv3gkno.ws-eu49.gitpod.io/signup",{
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
				.then(data => console.log(data))
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
