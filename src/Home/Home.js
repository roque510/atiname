import React    from "react";
import template from "./Home.jsx";
import * as firebase from 'firebase';


class Home extends React.Component {

	signOut(e) {
	    e.preventDefault();
	    firebase.auth().signOut().then(function() {
	      // Sign-out successful.
	      alert("BYE!");
	    }).catch(function(error) {
	      // An error happened.
	      alert("Yikes somethng HAPPEND",error);
	    });
	  }

	componentDidMount(){
		var user = firebase.auth().currentUser;
		if (user != null) {
		  user.providerData.forEach(function (profile) {
		    console.log(user);
		  });
		}
	}

  render() {
    return template.call(this);
  }
}

export default Home;
