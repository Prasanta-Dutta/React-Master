# Setting up scripts like, start, build

npm run start == npm start which converted to [npx parcel index.html] behind the scene.
npm run build ✅, npm build ❌  ➡️➡️➡️ only allowed for start script.


## JSX
Not html in js, but html or xml like syntax. Used to write with js.

➡️➡️➡️ When writting jsx ➡️ Go to Parcel ➡️ Parcel behind the scene using Babel 
    ➡️ Babel convert it to reactElement() ➡️ Go to render() ➡️ Then converted to pure html

If writing jsx into multiple line wrap with ().
If writing more than 1 html element use fragment <></> or wrap with div.


## Functional Components
1️⃣ Is a normal js function that return a peice of jsx or an react elemnt. 
2️⃣ Naming should be started with in capital letter always otherwise get error.
3️⃣ Render like, '''render(<HeadingComponent />)'''
4️⃣ <Title />, <Title></Title>, {Title()} ➡ Both declaration are same.
Self closing, normal, calling function.