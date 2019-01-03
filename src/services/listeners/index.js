export default () => {
    console.log('Registering listeners');

    firebase.auth.onAuthStateChanged(user => {
        if (user) {

            firebase.worksCollection.orderBy('createdAt', 'desc').onSnapshot(querySnapshot => {
                let worksArray = []

                querySnapshot.forEach(doc => {
                    let work = doc.data()
                    work.id = doc.id
                    worksArray.push(work)
                })

                store.commit('setWorks', worksArray)
            });
        };

        if(!user) {
            console.log('Nah, no user, listeners not registered');
        }
    });
}
