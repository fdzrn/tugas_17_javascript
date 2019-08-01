function tugas17Satu() {
	let kata1 = 'Saya beLajar bahaSa peMrograman deNgan khUsuk';
	let kata2 = 'Allen SedAng MemAncinG IkaN di suNgai,DIA MEndapat ikAN GaBuS 3 Ekor dan LanGsuNg Dijual';
	console.log(kata1.toLowerCase());
	console.log(kata1.toUpperCase());
	console.log(kata2.toLowerCase());
	console.log(kata2.toUpperCase());
}
tugas17Satu();


function tugas17Dua(){
	let kata = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
	kata.charCodeAt(0);
	kata.charCodeAt(1);
	kata.charCodeAt(2);
	kata.charCodeAt(3);
	kata.charCodeAt(4);
	kata.charCodeAt(5);
	console.log(kata.charCodeAt(0) + "-" + kata.charCodeAt(1) + "-" + kata.charCodeAt(2) + "-" + kata.charCodeAt(3) + "-"+kata.charCodeAt(4) + "-" + kata.charCodeAt(5));
	// kata = kata.substr(0,6);
	// for (var i = 0; i < kata.length; i++) {
	// 	console.log(kata.charCodeAt(i));
	// }
}
console.log(tugas17Dua());