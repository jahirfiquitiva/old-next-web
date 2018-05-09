<!-- .slide: data-background="#4285F4" -->
<!-- .slide: data-state="terminal" -->
## Kotlin-ize your Android development 

Jahir Fiquitiva


!!!

<!-- .slide: data-background="#4285F4" -->
<!-- .slide: data-state="terminal" -->
## 1. Context

!!!

<div align="center" style="font-size:10px">
<img src="img/jetbrains.png" width="192"/>
via Wikimedia Commons
</div>

notes:
* Created by JetBrains
* They created PhpStorm, WebStorm, PyCharm, CLion and IntelliJ IDEA.
* All other IDEs are based on IntelliJ IDEA.

!!!

### Reasons and overview

notes:
* Since Jetbrains works are mostly written in Java, they intimately know the pains and the things that cause most of problems.
* Made to address those issues, such as nullability, after having tried Groovy and Scala.
* Overview:
    * Allows creating apps for JVM, Android, Web and native.
    * Concise -> Reduces amount of boilerplate code (what has to be added in multiple places with little to none changes).
    * Interoperable
    * You can even use it with Eclipse
    * It's open-source.

!!!

<center>
![Kotlin+Android](img/kotlinandroid.png)
</center>

notes:
* Announced as getting first-class support from Google, at Google I/O 2017
* Android 3.0.0 has the plugin pre-installed, although it can be also installed on AS 2.3.3 (current latest stable version)
* It's mature and production-ready. Already used by multiple companies.

!!!

<!-- .slide: data-background="#4285F4" -->
<!-- .slide: data-state="terminal" -->
## 2. Features and syntax
 
!!!

### Properties
Java (variables)
```java
String a;
int count = 0;
CoordinatorLayout coordinator;
```

notes:
1. Will be null by default
2. Not null but can become null
3. Again, null. Views cannot be initialized here
4. Anything can be put at top-level in Kotlin
SCROLL DOWN!

!!v

Kotlin
```kotlin
private var count = 0
private var dialog: AlertDialog? = null
private lateinit var coordinator: CoordinatorLayout
private val toolbar: Toolbar by lazy { findViewById<Toolbar>(R.id.toolbar) } 
private val fab: FloatingActionButton by bind(R.id.fab)
```

notes:
1. No primitives. Everything in Kotlin is an Object
2. Bye semicolon. RIP
3. name:Type -> Because compiler can infer Type by what's on the right
4. Mutable property. Not null
5. Mutable property. Null
6. Mutable property. Not null. Initialized later. Careful! Can lead to uninitialized property exception.
7. (And beyond) Immutable property. Not null. Initialized with Delegates
8. Quickly explain lazy !!
SCROLL DOWN!

!!v

### Careful!

Not all `val` are immutable, but they all are 'read-only'

E.g.:
```kotlin
val number: Int
    get() = Random().nextInt()
```

Recommendation: Use a fun-ction <!-- .element: class="fragment" data-fragment-index="1"-->
```kotlin
fun getRandomNumber() = Random().nextInt()
```
<!-- .element: class="fragment" data-fragment-index="1"-->

NOTES:
* Better to use a `getRandomNumber()` when we know it can actually mutate over time 
* Kotlin allows get and set override
SCROLL DOWN!

!!v

#### Overriding setters and getters

```kotlin
var isSomething:Boolean
    private set
```

```kotlin
var isSomething: Boolean
    get() { doAnotherThing(); return field }
    set(value) {
        doSomething()
        field = value
    }
```
<!-- .element: class="fragment" data-fragment-index="1"-->

NOtes:
* Properties that we want to modify in its class, but have access to, in other classes. 

!!!

### Null-safety
Types are not null by default

To "force" a type to be null, add ? <!-- .element: class="fragment" data-fragment-index="1" -->

notes:
SCROLL DOWN!

!!v

### Working with null properties:
Explicit call !! (Not recommended) <!-- .element: class="fragment" data-fragment-index="1"-->
```kotlin
something!!.doSomething()
```
<!-- .element: class="fragment" data-fragment-index="1"-->

Safe call ?. <!-- .element: class="fragment" data-fragment-index="2"-->
```kotlin
something?.doSomething()
something?.let{ ... }
```
<!-- .element: class="fragment" data-fragment-index="2"-->

Elvis operator ?: <!-- .element: class="fragment" data-fragment-index="3"-->
```kotlin
val isValid = something?.isValid() ?: false
val isPropertyValid = something?.property?.isValid() ?: false
```
<!-- .element: class="fragment" data-fragment-index="3"-->

notes: 
1. Will throw NPE
2. Will NOT throw NPE
3. if (notnull) something() else other()

!!!

### Data classes

Java:
```java
public class Note {
    private String title;
    private String content;
    private Date date;
    private Importance importance;
    
    public Note(String title) {
        this.title = title;
        this.date = new Date();
    }
```

notes:
SCROLL DOWN!

!!v
```java
    public Note(String title, String content) {
        this(title);
        this.content = content;
    }
    
    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }
```

notes:
SCROLL DOWN!

!!v

```java
    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public Date getDate() {
        return date;
    }
```

notes:
SCROLL DOWN!

!!v

```java
    public Importance getImportance() {
        return importance;
    }

    public void setImportance(Importance importance) {
        this.importance = importance;
    }

    public enum Importance {
        LOW, MEDIUM, HIGH
    }
}
```

notes:
SCROLL DOWN!

!!v

Kotlin:
```kotlin
data class Note(var title:String, var content:String = "") {
    val date: Date = Date()
    var importance = Importance.HIGH
    
    init {
        ...
    }
    
    enum class Importance {
        LOW, MEDIUM, HIGH
    }
}
```

Notes:
* Generates `equals()`, `toString()`, `hashCode()`, `copy()`
* `copy()` is the Kotlin equivalent to Java's `clone()`
SCROLL DOWN!

!!v

```kotlin
data class Note(var title:String, var content:String = "")
```

```kotlin
val note = Note("Pataconf", "2017")
val noteCopy = note.copy(title = "JSConf")
```
<!-- .element: class="fragment" data-fragment-index="1"-->

notes:
SCROLL DOWN!

!!v

#### String Interpolation

Without 'data' keyword:
```kotlin
val note = Note("Pataconf", "2017")
println("$note")
// Outputs: "Note: Note@3a71f4dd"
```

With 'data' keyword:
<!-- .element: class="fragment" data-fragment-index="1"-->
```kotlin
val note = Note("Pataconf", "2017")
println("$note")
// Outputs: "Note(title=Pataconf, content=2017)"
println("Note title is: ${note.title}")
// Outputs: "Note title is: Pataconf"
```
<!-- .element: class="fragment" data-fragment-index="1"-->

notes:
SCROLL DOWN!

!!v

#### Accessing properties

Java:
```java
private String mTitle;
public String getTitle() { ... }
public void setTitle(String title) { ... }
```

Kotlin:
<!-- .element: class="fragment" data-fragment-index="1"-->
```kotlin
// Property name based on getter and setter
note.title = "Pataconf"
println(note.title)
```
<!-- .element: class="fragment" data-fragment-index="1"-->

notes:
SCROLL DOWN!

!!v

Kotlin:
```kotlin
var mTitle:String
```

Java:
<!-- .element: class="fragment" data-fragment-index="1"-->
```java
// Methods based on property name
note.setMTitle("Pataconf");
System.out.println(note.getMTitle());
```
<!-- .element: class="fragment" data-fragment-index="1"-->

!!!

### Static fields

Java:
```java
class Constants {
    public static final String PLAYSTORE_LINK_PREFIX = "https://play.google.com/store/apps/details?id=";
}
```

notes:
SCROLL DOWN!

!!v

Kotlin:
```kotlin
object Constants {
    // TODO: Add annotation
    const val PLAYSTORE_LINK_PREFIX = "https://play.google.com/store/apps/details?id=";
}
```

```kotlin
class MyClass {
    companion object {
        // TODO: Add annotation
        const val PLAYSTORE_LINK_PREFIX = "https://play.google.com/store/apps/details?id=";
    }
}
```

notes:
SCROLL DOWN!

!!v

#### Calling Kotlin static fields from Java
```java
String link = Constants.INSTANCE.getPLAY_STORE_LINK() + "my.package.name";
// With @JvmStatic
// Can be used as previous one too
String link = Constants.getPLAYSTORE_LINK_PREFIX() + "my.package.name";
// With @JvmField
String link = Constants.PLAY_STORE_LINK + "my.package.name";

String link = MyClass.Companion.getPLAYSTORE_LINK_PREFIX() + "my.package.name";
// With @JvmStatic
// Can be used as previous one too
String link = MyClass.getPLAYSTORE_LINK_PREFIX() + "my.package.name";
// With @JvmField
String link = MyClass.PLAY_STORE_LINK + "my.package.name";
```

!!!

### Lambdas

Java:
```java
view.setOnClickListener(new OnClickListener(){
    @Override
    public void onClick(View view){
        doSomething();
    }
});
```

notes:
SCROLL DOWN!

!!v

Kotlin:
```kotlin
view.setOnClickListener {
    doSomething()
}

view.setOnClickListener {
    it.hide()
    doSomething()
}
```

Notes:
* `it` is the implicit name that refers to the View as it is a single parameter. 
* `hide()` is an extension function
* Always surrounded by curly braces

SCROLL DOWN!

!!v

Java:
```java
interface ClickListener {
    void onClick(View view);
    void onLongClick(View view);
}
```

Kotlin: <!-- .element: class="fragment" data-fragment-index="1"-->
```kotlin
object : ClickListener {
    override onClick(view: View){
        // TODO
    }
    
    override onLongClick(view: View){
        // TODO
    }
}
```
<!-- .element: class="fragment" data-fragment-index="1"-->

notes:
SCROLL DOWN!

!!v

Java:
```java
abstract class ClickListener {
    abstract void onClick(View view);
}
```

Kotlin: <!-- .element: class="fragment" data-fragment-index="1"-->
```kotlin
object : ClickListener() {
    override onClick(view: View) {
        // TODO
    }
}
```
<!-- .element: class="fragment" data-fragment-index="1"-->

SAM Conversions: Single Abstract Method <!-- .element: class="fragment" data-fragment-index="2"-->

!!!

### Higher-Order Functions

```kotlin
fun something(newContent: String, extra: () -> Unit){
    content = newContent
    extra()
}

something("...") {
    // TODO
}
```

notes:
* Functions that can take other functions as arguments
* Functions that can return a function as output
SCROLL DOWN!

!!v

```kotlin
class Note(...) {
    ...
    fun something(newContent: String, extra: (Note) -> Unit) {
        content = newContent
        extra(this)
    }
    ...
}

val newContent = "..."
something(newContent) {
    it.title = "New title"
}
```

notes:
1. Written inside Note class
2. Written outside Note class
SCROLL DOWN!

!!v

```kotlin
class Note(...) {
    ...
    fun something(extra:(Note, Boolean) -> Unit) {
        extra(this, title.hasContent)
    }
    ...
} 

something() { note, hasContent ->
    note.title = "New title"
    note.content = if (hasContent) "Has content" else "It's empty"
}
```

notes:
1. Written inside Note class
2. Written outside Note class
* Parameter types can be omitted
* If you don't use a property, you can name it _

!!!

### Extension functions

```kotlin
fun Note.something(title: String, extra: (Note) -> Unit) {
    this.title = title 
    extra(this)
}

val newTitle = "..."
something(newTitle) {
    it.importance = Note.Importance.LOW
}
```

notes:
1. Written outside Note class
2. Written outside Note class
SCROLL DOWN!

!!v

```kotlin
fun Note.something(title: String, extra: Note.() -> Unit) {
    this.title = title 
    extra(this)
}

val newTitle = "..."
something(newTitle) {
    importance = Note.Importance.LOW
}
```

notes:
SCROLL DOWN!

!!v

#### Other examples

```kotlin
fun Activity.showToast(message: String, duration: Int = Toast.LENGTH_SHORT) =
        Toast.makeText(this, message, duration).show()

inline val String.hasContent
    get() = isNotBlank() && isNotEmpty()
    
fun View.showSnackbar(message: String, duration: Int = Snackbar.LENGTH_SHORT,
                      options: Snackbar.() -> Unit) {
    val snack = Snackbar.make(this, message, duration)
    snack.options()
    snack.show()
}
```

notes:
* Use val/var when the function:
    * does not throw exceptions
    * Is not complex
    * Is cheap to execute


!!v

#### Calling them from Java

Default class name: `MyClassKt.java`

Calling it in Java:
```java
MyClassKt.showToast(activity, "This is the message");
```

Override default name by adding:
```kotlin
@file:JvmName("MyUtils")
```
in the file's first line.

!!!

### when

```kotlin
when (note.importance) {
    Note.Importance.LOW -> itemView.setBackgroundColor(Color.parseColor("#69F0AE"))
    Note.Importance.MEDIUM -> itemView.setBackgroundColor(Color.parseColor("#FFF176"))
    Note.Importance.HIGH -> itemView.setBackgroundColor(Color.parseColor("#FF8A80"))
}
```

notes:
SCROLL DOWN!

!!v

```kotlin
when(hour) {
    0 -> print("Is midnight")
    in 1..12 -> print("Is morning")
    20, 21 -> print("Is either 8 pm or 9 pm")
    is Float -> print("$hour is a Float")
    else -> print("Is another hour")
}
```

!!!

### let

```kotlin
something?.let{
    it.doSomething()
    it.doAnotherThing()
}
```

notes:
SCROLL DOWN!

!!v

### apply

```kotlin
notesAdapter += Note(title, content).apply { importance = Note.Importance.HIGH }
```

instead of: <!-- .element: class="fragment" data-fragment-index="1"-->
```kotlin
val note = Note(title, content)
note.importance = Note.Importance.HIGH
notesAdapter += note
```
<!-- .element: class="fragment" data-fragment-index="1"-->

notes:
* Mention `+=` means an operator overload!
SCROLL DOWN!

!!v

### with
```kotlin
with(rv) {
    layoutManager = LinearLayoutManager(this@MainActivity, LinearLayoutManager.VERTICAL,
                                        false)
    addItemDecoration(
            DividerItemDecoration(this@MainActivity, DividerItemDecoration.VERTICAL))
    adapter = notesAdapter
}
```

same as: <!-- .element: class="fragment" data-fragment-index="1"-->
```kotlin
rv.layoutManager = ...
rv.addItemDecoration(...)
rv.adapter = ...
```
<!-- .element: class="fragment" data-fragment-index="1"-->

notes:
* Allows multiple operations with the same object

!!!

<!-- .slide: data-background="#4285F4" -->
<!-- .slide: data-state="terminal" -->
## 3. Additional Android specific features and tools

!!!

### Custom Views

```kotlin
class MyCustomView : View {
    constructor(ctx: Context) : super(ctx)
    constructor(ctx: Context, attrs: AttributeSet) : super(ctx, attrs)
    constructor(ctx: Context, attrs: AttributeSet, style: Int) : super(ctx, attrs, style)
    ...
}
```

!!v

### Open and Sealed classes
(Not Android exclusive)

```kotlin
class MyCustomView : View {
    ...
}

class MyOtherView : MyCustomView {
    // Not possible to inherit. Not even in same file
    ...
}
```

notes:
SCROLL DOWN!

!!v

```kotlin
sealed class MyCustomView : View {
    ...
}

class MyOtherView : MyCustomView {
    // Possible to inherit but only in the same file
    ...
}
```

notes:
SCROLL DOWN!

!!v

```kotlin
open class MyCustomView : View {
    ...
}

class MyOtherView : MyView {
    // Possible to inherit
    ...
}
```

!!!

### Kotlin Android Extensions

```xml
...
    <TextView
            android:id="@+id/date"
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:textStyle="bold"/>
...
```

```kotlin
import kotlinx.android.synthetic.main.item_note.view.date

fun bind(note: Note, listener: (Note, Boolean) -> Unit) {
    ...
    date.text = note.date.toString()
    ...
}
```

!!v

Requires enabling plugin in `build.gradle`:

```gradle
apply plugin: 'kotlin-android-extensions'
```

!!!

### Anko

Anko commons:
- Intents
- Dialogs
- Logging
- Resources and dimensions
    
Anko layouts:
DSL for writing Android layouts

And more!

notes:
SCROLL DOWN!

!!v

### DSL or Type-Safe Builders

```kotlin
fun html(init:HTML.() -> Unit):HTML {
    val html = HTML()
    html.init()
    return html
}

html {
    head { ... }
    body { ... }
}
```


!!!

<!-- .slide: data-background="#4285F4" -->
<!-- .slide: data-state="terminal" -->
## 4. Why should you implement Kotlin?

!!!

### Interop

What you can do in Kotlin, you can do it in Java too, and vice versa.

!!!

### Implement it

notes:
* Kotlin has the ability to eradicate NPEs completely (which represent a high % of apps crashes)
* Easy to read (No super big changes from Java)
* Explaining the basics can lead to quick understanding
* Code reviews are only going to get better
* Compiles faster than Java
* We have the chance to write the future:
    * We can write apps that crash less.
    * We can write code that is cleaner and more maintainable.
    * It's a WIN for everybody. 

!!!

### Already adopted by

* Pinterest
* Gradle
* Evernote
* Uber
* Atlassian
* Flipboard
* Square
* And more

notes:
1. Uses it in its app, which is used by 150M people per month.
2. Introducing Kotlin as language for writing scripts.
3. Integrated Kotlin in their Android client

!!!

<div align="center" style="font-size:10px">
<img src="https://www.bleepstatic.com/images/news/u/986406/Charts/Reports/Kotlin-chart.png"/><br>
report by Realm
</div>

notes:
* Kotlin is expected to surpass Java as default Android dev language by dec. 2018
* Kotlin adoption rate has doubled since Google I/O 2017

!!!

### Personal experience
* Learn quickly
* Stars on GitHub
* Build times on TravisCI

!!!

### Useful links
* [Kotlin Docs](http://j.mp/KotlinDocs)
* [Kotlin Koans](http://j.mp/KotlinKoansDocs)
* [Koans Android App](https://play.google.com/store/apps/details?id=me.vickychijwani.kotlinkoans)
* [From Java to Kotlin](http://j.mp/FromJavaToKotlin)
* [Kotlin Cheat Sheet](http://j.mp/KotlinCheatSheet)

!!!

### Additional links worth checking
* [Lambdas](http://j.mp/HOFLKotlin)
* [Operator Overloading](http://j.mp/KotlinOperatorOverloading)
* [DSL or Type-Safe Builders](http://j.mp/KotlinDSL)
* [Anko](http://j.mp/AnkoGH) 

!!!

### References
* [Google I/O Developer Keynote 2017](https://www.youtube.com/watch?v=EtQ8Le8-zyo)
* [Jake Warthon - Android Development with Kotlin](https://www.youtube.com/watch?v=A2LukgT2mKc)
* [Android Developers - Life is Great and Everything will be OK](https://www.youtube.com/watch?v=fPzxfeDJDzY&)
* [Christina Lee - Kotlin in Production](https://www.youtube.com/watch?v=mDpnc45WwlI)
* [Kotlin: val does not mean immutable](https://goo.gl/myTegT)
* [Kotlin Expected to Surpass Java as Android Default Programming Language for Apps](https://goo.gl/cacZoE)

!!!

### That's it!

Slides available at: [http://j.mp/JFKotlinSlides](http://j.mp/JFKotlinSlides)

Project available at: [http://j.mp/JFSimpleKotlinApp](http://j.mp/JFSimpleKotlinApp)
<br>
<br>

Find me on:
* Google+:  [+JahirFiquitivaR](https://plus.jahirfiquitiva.me/)
* Twitter:  [@jahirfiquitiva](https://twitter.jahirfiquitiva.me/)
* GitHub:   [https://github.com/jahirfiquitiva](https://github.com/jahirfiquitiva)