 $(function(){
	 
})  

function formValue(){
	var status = true;
	/*HỌ TÊN NHẬP TỐI ĐA 40 KÝ TỰ*/
	var hoten = document.getElementById('txtHoten').value;
	if(hoten =="")
	{
		document.getElementById('txtHoten').style="border : solid 1px red";
		document.getElementById('msgHoten').innerHTML="Yêu cầu ko được bỏ trống !";
		status = false;
	}
	else{
		var Reghoten = /([\w]){9,39}$/;
		if(Reghoten.test(hoten)== false)
		{
			document.getElementById('txtHoten').style="border : solid 1px red";
			document.getElementById('msgHoten').innerHTML= "Họ tên ko được quá 40 kí tự !";
			status = false;
		}
		else
		{
			document.getElementById('txtHoten').style="border : solid 1px green";
			document.getElementById('msgHoten').innerHTML="";
		}
	}

	/*KIỂM TRA ĐỊA CHỈ TỐI ĐA 40 TỪ */
	var	diachi = document.getElementById('txtDiachi').value;
	if(diachi == "")
		{
			document.getElementById('txtDiachi').style = "border :red 1px solid";
			document.getElementById('msgDiachi').innerHTML ="Không được bỏ trống";
			status = false;
		}
		else{
			diachi = diachi.replace(/\s+/g,' ');
			var sotu = diachi.split(" ").length;
			if(sotu <2 || sotu > 40)
			{
				document.getElementById('txtDiachi').style = "border :red 1px solid";
				document.getElementById('msgDiachi').innerHTML = "Địa chỉ không đúng";
				status = false;
			}
			else{
				document.getElementById('txtDiachi').style = "border :green 1px solid";
				document.getElementById('msgDiachi').innerHTML = "";
			}
		}

	/*KIỂM TRA ĐỊA CHỈ EMAIL */
		/*Chứa các ký tự chữ cái, chữ số, dấu chấm, gạch dưới Ký tự @
			Nhóm ký tự trước @ có 6-32 ký tự
			Nhóm ký tự sau @ là domain một hoặc nhiều cấp */
			var email = document.getElementById("txtEmail").value;
			var RegEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
			if(email =="")
			{
				document.getElementById("txtEmail").style = "border : red 1px solid";
				document.getElementById("msgEmail").innerHTML ="Địa chỉ Email không được để trống !";
				status = false;
			}
			else{
				if(RegEmail.test(email)== false)
				{
					document.getElementById("txtEmail").style = "border : red 1px solid";
					document.getElementById("msgEmail").innerHTML ="Địa chỉ Email không đúng !";
					status = false;
				}
				else{
					document.getElementById("txtEmail").style = "border :green 1px solid";
					document.getElementById("msgEmail").innerHTML = "";
				}
			}

				// KIỂM TRA SỐ ĐIỆN THOẠI
			var sdt = document.getElementById("txtDt").value;
			var sdtReg = /^0\d{9}$/;

			if(sdt =="")
			{
				document.getElementById("txtDt").style= "border : solid 1px red";
				document.getElementById("msgDt").innerHTML = "Yêu cầu nhập SĐT !";
				status = false;
			}
			else{
				if(sdtReg.test(sdt)== false)
				{
					document.getElementById("txtDt").style= "border : solid 1px red";
					document.getElementById("msgDt").innerHTML = "SĐT không đúng !";
					status = false;
				}
				else
				{
					document.getElementById("txtDt").style= "border: solid 1px green";
					document.getElementById("msgDt").innerHTML= "";
				}
			}

			// KIỂM TRA NGÀY THÁNG NĂM SINH
			var ngay = document.getElementById("txtNgay").value;
			var thang = document.getElementById("txtThang").value;
			var nam = document.getElementById("txtNam").value;

			console.log(ngay);
			console.log(thang);
			console.log(nam);

			// if( ngay == "" || thang =="" || nam == "")
			// {
			// 	document.getElementById("txtNgay").style="border : solid 1px red";
			// 	document.getElementById("txtThang").style="border : solid 1px red";
			// 	document.getElementById("txtNam").style="border : solid 1px red ";
			// 	document.getElementById("msgNgaysinh").innerHTML="Yêu cầu nhập đầy đủ ngày tháng năm sinh";
			// 	status = false;
			// }
			// else{
			// 	if(ngay <= 31 || ngay >= 1)
			// 	{
			// 		document.getElementById("txtNgay").style="border : solid 1px green";
			// 		document.getElementById("msgNgaysinh").innerHTML="";
			// 		//status = true;
			// 	}
			// 	if(ngay > 31 || ngay < 1)
			// 	{
			// 		document.getElementById("txtNgay").style = "border : solid 1px red";
			// 		document.getElementById("msgNgaysinh").innerHTML = "";
			// 		status = false;
			// 	}
			// 	if(thang >12 || thang<1)
			// 	{
			// 		document.getElementById("txtThang").style="border : solid 1px red";
			// 		document.getElementById("msgNgaysinh").innerHTML="Tháng sinh không đúng !";
			// 		status = false;
			// 	}
			// 	if (thang <=12 || thang>=1) {
			// 		document.getElementById("txtThang").style="border : solid 1px green";
			// 		document.getElementById("msgNgaysinh").innerHTML="";
			// 	}
			// 	if(nam >2019 || nam <1700)
			// 	{
			// 		document.getElementById("txtNam").style="border : solid 1px red";
			// 		document.getElementById("msgNgaysinh").innerHTML="Năm sinh không đúng !";
			// 		status = false;
			// 	}
			// 	 if(ngay )
			// 	 {
			// 	 	document.getElementById("txtNgay").style="border : solid 1px green";
			// 	 	document.getElementById("txtThang").style="border : solid 1px green";
			// 	 	document.getElementById("txtNam").style="border : solid 1px green ";
			// 	 	document.getElementById("msgNgaysinh").innerHTML="";
			// 	 }
			// }	 
			if (ngay == "" || thang == "" || nam == "") {
				document.getElementById("txtNgay").style="border : solid 1px red";
				document.getElementById("txtThang").style="border : solid 1px red";
				document.getElementById("txtNam").style="border : solid 1px red ";
				document.getElementById("msgNgaysinh").innerHTML="Yêu cầu nhập đầy đủ ngày tháng năm sinh";
			}
			if (ngay > 31 || ngay < 1) {
				document.getElementById("txtNgay").style = "border : solid 1px red";
				document.getElementById("msgNgaysinh").innerHTML = "";
			}
			else {
				document.getElementById("txtNgay").style = "border : solid 1px green";
				document.getElementById("msgNgaysinh").innerHTML = "";
			}

			if (thang > 12 || thang < 1) {
				document.getElementById("txtThang").style = "border : solid 1px red";
				document.getElementById("msgNgaysinh").innerHTML = "";
			}
			else{
				document.getElementById("txtThang").style = "border : solid 1px green";
				document.getElementById("msgNgaysinh").innerHTML = "";
			}
			if (nam > 2019 || nam < 1800) {
				document.getElementById("txtNam").style = "border : solid 1px red";
				document.getElementById("msgNgaysinh").innerHTML = "sai";
			}
			else{
				document.getElementById("txtNam").style = "border : solid 1px green";
				document.getElementById("msgNgaysinh").innerHTML = "";
			}

			// KIỂM TRA ĐỀ TÀI
			var detai = document.getElementById("slDetai");
			var item = detai.options[detai.selectedIndex].value;
			console.log(item);
			if (item=="") {
				document.getElementById('slDetai').style = "border:1px solid red";
				document.getElementById("msgDetai").innerHTML = "Phải lựa chọn ít nhất một khoá học";
				status = false;
			}else{
				document.getElementById('slDetai').style = "border:1px solid green";
				document.getElementById("msgDetai").innerHTML = "";
			}

			// KIỂM TRA NHÓM
			var nhom = document.getElementsByName("rbGroup");

			if(nhom[0].checked == false && nhom[1].checked == false && nhom[2].checked == false && nhom[3].checked == false && nhom[4].checked == false)
			{
				document.getElementById("msgGroup").innerHTML="Xin hãy chọn nhóm của bạn ";
				status = false;
			}
			else{
				document.getElementById("msgGroup").innerHTML="";
			}

			// NẾU CHỌN NHÓM QUẢN TRỊ MẠNG MÀ GIỜ HỌP LÀ A HOẶC D THÌ BÁO KO CÓ GIỜ HỌP NÀY !
			var giohoc = document.getElementsByName("gh[]");
				if(giohoc[0].checked == false && giohoc[1].checked == false && giohoc[2].checked == false && giohoc[3].checked == false && giohoc[4].checked == false)
				{
					document.getElementById("msgGiohop").innerHTML="Hãy chọn ít nhất 1 giờ họp !";
					status = false;
				}
				else
				{
					if(item == 4 && giohoc[4].checked == true || item == 4 && giohoc[3].checked == true)
					{
						document.getElementById("msgGiohop").innerHTML="Chưa có giờ họp này !";
						status = false;
					}
					else
					{
						document.getElementById("msgGiohop").innerHTML="";
					}
				}	

	/*KIỂM TRA GIÁ TRỊ CỦA BIẾN STATUS*/
	if (status == false) {
		return false;
	}
	else
	{
		return true; 
	}
}

function numericonly() {
	if(event.keyCode >=48 &&event.keyCode <=57)
		event.returnValue= true;
	else{
		event.returnValue= false;
	}
}