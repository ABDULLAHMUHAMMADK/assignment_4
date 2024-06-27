var low = 5;
      var grt = 20;
      var lp = true;
      let arr = [1, 20, 100, 4, 10];

      for (let i = 0; i < 5; i++) {
        if (arr[i] > grt) {
          alert("grater");
        } else if (arr[i] < low) {
          alert("lower");
        } else {
          alert("in between higher and lower");
        }
        
      }