if !User.find_by(id: 1)
  User.create!(username:"DemoUser", email:"demoemail", password:"password", work:"Artist at ___")
end
User.create!(username:"Up Grade", email:"upGrade@email.com", password:"you'llneverguess", work:"2D Artist at Zomb Studio")
User.create!(username:"xX_Pen God_Xx", email:"artweewoo@art.com", password:"iluvart", work:"3D Artist at Obo Studios")
User.create!(username:"Ben Laser", email:"ben_pewpew@gmail.com", password:"i shoot therefore I pew", work:"Artist at Home")
User.create!(username:"Robert Artman", email:"robzar@snailmail.com", password:"enihtnamassti", work: "Artist at Homework Schoolio")
User.create!(username:"Samuel Cramin", email:"sam_cram@mail.com", password:"but this one's all lowercase", work:"3D Artist at University of Idaho")
User.create!(username:"Samantha Floresh", email:"SamFlo@gmail.com", password:"what about it!@", work:"Artist at AE ICED")
User.create!(username:"Crom McGoblin", email:"CromGoblin@email.com", password:"babyBacccRibs", work:"Artist at JV3")
User.create!(username:"Art Man", email:"artman@email.com", password:"secret zelda reference", work:"Tech Artist at Armarzorn LTE")

# User.create!(username:"", email:"", password:"", avatar:"")