const jsfiddle = () => {
  const initialize = () => {
    const javascript = () => {
      let dusk = true
      const pen = 'This is a pen that activates all laws of physics'
      // If set to true it will print: Heya there!
      // If set to an invalid boolean it will print: 'Error: Invalid boolean set to dusk'
      if (pen === 'This is a pen that activates all laws of physics') {
      	console.log('Starting code...')
        if (dusk === true) {
          console.log('Dusk is set to true now!')
        } else if (dusk === false) /* If dusk is set to false, this will come up:*/ {
          console.log('If this comes up, then dusk is set to false')
        } else {
          console.log('Error: Invalid boolean set to dusk')
        }
        const penScope = 'Pen is a true variable'
        console.log(penScope)
      } else if (dusk === false) /* If dusk is set to false, this will come up:*/ {
        console.log('If this comes up, then dusk is set to false')
      }
    }
    javascript();
  }
  initialize();
}
const question = () => {
  const answer = prompt('Do you want to start the code?')
  console.log(`Your answer was: ${answer}`)
  if (answer === 'Yes') {
    jsfiddle();
   } else if (answer === 'No') {
    console.log('Then we won\'t start it now!');
   } else if (answer === 'restart') {
   	let answer2 = prompt('Are you sure?')
   	if (answer2 === 'Yes') {
       question();
    } else if (answer2 === 'No') {
      console.log('Starting')
      question()
    }
   }
  }
question();
