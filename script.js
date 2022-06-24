let hasAnswer = false
let userName = ''
let year = ''
let dressedStyle = ''
let sadStory = ''

const timetravel = () => {
  while (!hasAnswer) {
    userName = prompt('Welcome to Traveling Door \nWhat is your name?')
    if (userName.length !== 0) {
      hasAnswer = true
      break
    }
  }

  hasAnswer = false
  while (!hasAnswer) {
    year = prompt(
      `Hello, ${userName}\n Each time you choose a year to go, You have one week to explore, ready?\n If so, choose a year time frame between 1990, 1980 and 1970`
    )
    if (year === '1980' || year === '1990' || year === '1970') {
      hasAnswer = true
      break
    }
  }
  hasAnswer = false

  const peaceFulTime = () => {
    const singer = parseInt(
      prompt(
        `The 1990 were a relatively peaceful time of properity would you like to go th the concert of Jennifer Lopez, Madonna or Michael Jackson? \n Please enter number: \nJnnifer Lope= 1 \nMadonna= 2\nMichael Jackson= 3 `
      )
    )

    const switchsinger = (singer) => {
      switch (singer) {
        case 1:
          alert(
            `Lucky you!! we are bring you to Time Square,NYC for Billboard Music Awards in 1999, you will also see young Snoop Sogg there!! `
          )
          break
        case 2:
          alert(
            `You are going to one of the greatest tours of the past year: Blond Ambition World in Nice, France`
          )
          break
        case 3:
          alert(
            `You will be going to The dangerous Tour! the biggest tour he has ever done in history, Get ready!! `
          )
          break
        default:
          alert(`please enter valid number.`)
          peaceFulTime()
      }
    }
    switchsinger(singer)
  }

  const movieToWatch = () => {
    while (!hasAnswer) {
      dressedStyle = prompt(
        `Everyone's favorite romantic movie was about two teeage cousins. Let's watch the movie before we go to a theater, we need to get you dressed up, how would you like to be dressed up?`
      )

      if (dressedStyle.length !== 0) {
        alert(
          `alright! you will be dressed up as you requested: ${dressedStyle}`
        )
        hasAnswer = true
        break
      }
    }
    hasAnswer = false
  }

  const sadEra = () => {
    alert(`oh 1970 is a sad era`)

    while (!hasAnswer) {
      sadStory = prompt(
        `Which scenario you want to be in while its happening? \n Plane Hijiacking = 1,\n Subway crash = 2,\n Procession = 3`
      )

      if (sadStory.length !== 0) {
        if (sadStory === '1') {
          alert(
            `Plane hijacking happening on the way to Cuba. Don't worry! we will bring you back!`
          )
          break
        } else if (sadStory === '2') {
          alert(
            `2 people are killed and 70 injured during a subway crash in Queens, NYC`
          )
          break
        } else {
          alert(
            `You will be joining 100000 people in Washington, D.C. demonstrate against the Vietnam War`
          )
          break
        }
      }
    }

    while (!hasAnswer) {
      const historyMoment = prompt(
        `I hate terrify stories let's withness some great moments in the history Yes? (Y/N)`
      )
      if (historyMoment.length !== 0) {
        if (historyMoment === 'Y') {
          alert(
            `We are bring you to 1969 to watch the Apollo 11 mission, Isn' it cool?`
          )
          break
        } else {
          alert(
            `Seem like you like to be in terrify moment. so what about choose another accidnet to go?`
          )

          sadEra()
          break
        }
      }
    }
  }

  if (year === '1990') {
    peaceFulTime()
  } else if (year === '1980') {
    movieToWatch()
  } else if (year === '1970') {
    sadEra()
  }
}

timetravel()

let isTraveling = true

while (isTraveling === true) {
  const travelAgain = confirm(
    `Time Traveling has reach the end. Would you like to travel again ?`
  )
  if (travelAgain) {
    timetravel()
  } else {
    alert(`Time to say goodbay!`)
    isTraveling = false
  }
}
