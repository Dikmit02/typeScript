# typeScript
run the lite server using the npm start

# The Watch mode
For running the code in the watch mode run tsc <file_name> --watch or -w
By running the code in the watch mode we dont have to recompile the code everytime 

# tsconfig
to compile the entire folder in one go we init the folder by using tsc --init and it will 
create a tsconfig file 

# tsconfig > tagret
target => to which version the typescript will compile into javascript
// dafult is es5 and in es5 we dont have let and const 

es6=es2015

# tsconfig > lib
the lib stands for the library , if we doesnt specify the library, then by default it will take the target here the target is es5 and it will include the default setting that es5 will support like the document.querySelector() , console

# tsconfig > allowJs
check the js file during the compilation and allowJs to  be part of our project

# tsconfig > checkJs
check for error in the JS files

# tsconfig > sourceMap=true
A sourcemap is a mapping between the generated/transpiled/minified JavaScript file and one or more original source files. The main purpose of sourcemaps is to aid debugging. Basically, if there's an error in the generated code file, the map can tell you the original source file location. That's it.



# tsconfig > "noEmitOnError": true, 
No js file be generated if any TS file fails during the compilation.