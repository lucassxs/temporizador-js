  /* Botão em js*/
<script>
    document.getElementById("botao").disabled= true;
  </script>

/*Counter*/
  <script>
      var counter = 0;
  function myTimer() {
    var timer = setTimeout( function() {
      counter++;
      if( counter < 21 ) {
        myTimer();
      }
      else {
      document.getElementById("botao").disabled= false;
      }
    }, 1000 );
  }
    
  myTimer();
  </script>
