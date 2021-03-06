

function Register() {

	//-----------
	this.submit = function() {

		var params = {
			username : $("#txtUsername").val() ,
			password : $("#txtPassword").val()
		}

		$.getJSON( "/register.json", params, function(response,status) {

			if ( response["statuscode"] == 0 ) {
			
				$.toaster({ 
						priority : 'success', 
						message :"Register successfully"  
				});
				setTimeout( function() {
					window.location.href = "/login.html";
				}, 800);
				

			} else {
				$.toaster({ 
						priority : 'danger', 
						message :"Failed to register. " + response["statusmsg"]  
				});
				if ( response["statuscode"] == -2 ) {
					$("#igrpUsername").addClass("has-error"); 
					$("#vdlUsername").html(response["statusmsg"]); 
					$("#vdlUsername").show();
				}
			}
		});
	}

	
	//--------------------
	this.validate = function() {

		var ret = 0;

		var v_arr = ["Username", "Password", "RetypePassword"]

		for ( i = 0 ; i < v_arr.length ; i++ ) {

			var v = v_arr[i];
			if ( $("#txt" + v).val() == "" ) {
				$("#igrp" + v).addClass("has-error");
				$("#vdl" + v).html("Cannot be empty.");
				$("#vdl" + v).show();
				
				ret = -1;
			} else {
				$("#igrp"+ v ).removeClass("has-error");
				$("#vdl" + v ).hide();

			}
		}
		if ( ret == 0 ) {
			if ( $("#txtPassword").val() != $("#txtRetypePassword").val() ) {
				$("#igrpRetypePassword").addClass("has-error");
				$("#vdlRetypePassword").html("Repeat Password does not match the password!");
				$("#vdlRetypePassword").show();
				ret = -1;
			}
		}
		return ret;
	}

	//--------------------
	this.init = function() {

		var rg = this;
		$("#chkAgree").click ( function(ev) {
			$("#butSignup").attr("disabled",!this.checked);
		});

		$('#butSignup').click( function(ev) {
			
			if ( rg.validate() == 0 ) {
				rg.submit();
			}
		});
	}

}

$(document).ready(function(){
	rg = new Register();
	rg.init();
});

