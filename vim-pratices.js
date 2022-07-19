

                             // -> 1️⃣ Moving
// =>h move cursor left

// => j move cursor down

// => k move cursor up

// => l move cursor right

// => #h [j/k/l] move in a speciﬁed direction multiple
// times  (# = a number )

// => b / B move to the start of a word / token

// => w / W move to the start of the next word /
// token

// => e / E move to the end of a word / token

// => 0 (zero) jump to the beginning of line

// => $ jump to the end of line


// => ^ jump to the ﬁrst (non-blank) character
// of line

// => #G / #gg / :# ->move to a speciﬁed line number
// (replace # with the line number)

                                                       // -> Moving by Screens

// =>Ctrl+b move back one full screen

// =>Ctrl+f move forward one full screen

// =>Ctrl+d move forward 1/2 a screen

// =>Ctrl+u move back 1/2 a screen

// => Ctrl+e move screen down one line (without
// moving cursor!!)

// => Ctrl+y
// move screen up one line (without
// moving cursor)

// => ctrl + o move backward through the jump
// history

// =>ctrl + i move forward through the jump
// history

// => H swich move to the top of the screen

// => M switch move to the middle of the screen

// => L switch move to the bottom of the screen

// => * switch jump to the next instance of a word

// => # switch jump to the previous instance of a
// word

// => /pattern search forward for the speciﬁed
// pattern

// =>?pattern
// search backward for the speciﬁed
// pattern

// => n switch repeat the search in the same
// direction

                                        // -> Inserting

// =>i switch to insert mode before the cursor

// => I insert text at the beggining of the line

// => a switch to insert mode after the cursor

// => A insert text at the end of the line

// => o open a new line below the current one

// =>O
// open a new line above the current one

// =>ea
// insert text at the end of the word

// =>Esc
// exit insert mode


                            //   -> Editin
// => r
// replace a single character (+ return to
// command mode)

// =>cc replace entire line (+ move into insert
// mode)

// =>C / c$ replace from cursor to the end of line

// =>cw replace from cursor to the end of the
// word

// => s delete a character (+ move into insert
// mode)

// =>J
// merge with line below, separated with a
// single space

// => gJ
// merge with line below, with no space
// between

// =>. repeat last command

                          // -> Undoing/Redoing

// =>u / :u / :undo
// undo changes made in last entry

// =>#u undo multiple changes   (so there is # is a number)

// =>Ctrl+r redo the last undone entry

// =>#Ctrl+r redo multiple changes

// =>:undolist list undo branches

                                    // ->Deleting

// =>dd / D delete a single line

// =>dw delete a single word

// =>#dd / d#d delete multiple lines ❌

// => :#,#d delete a range of lines ❌

// => :%d delete all lines    ☑️

// => :.,$d delete from current line to the end of


                                          // -Copyi

// =>yy copy an entire line

// =>#yy copy the speciﬁed number of lines ❌

// => yaw copy a word with its trailing whitespace

// => yiw copy a word without its trailing
// white-space

// =>y$ copy everything right of the cursor

// =>y^ copy everything left of the cursor


// =>ytx copy everything between the cursor
// and a speciﬁed character (x)

// =>yfx copy everything between the cursor
// and a speciﬁed character (including that
// character)


                                        // ->Cutting

// =>dd cut the entire line

// =>#dd cut a speciﬁed number of lines

// =>d$ everything right of the cursor

                                         // ->Pasting
// =>p paste text after the cursor

// =>P paste text before the cursor

                                         // ->Marking

// =>v marking text using character mode

// =>V mark lines using line mode

// =>Ctrl+v mark text using block mode

// =>o move from one end of the marked text
// to the other

// =>aw mark a word ❌

// =>ab mark a block with () ❌

// =>aB mark a block with {} ❌

// =>at mark a block with <> ❌

// =>ib mark inner block ()

// =>iB mark inner block {}

// =>it mark inner block <>

                                 // ->Visual Commands

// =>y yank (copy) the marked text

// =>d delete (cut) the marked text

// =>p paste the text after the cursor

// =>u change the marked text to lowercase

// =>U change the marked text to uppercase

                                  // ->Marks and Jumps


// =>m[a-z] marking text using character mode ❌
// [from a to z]

// =>`a jump to position marked a ❌

// =>:marks list all marks

// =>:jumps list all jumps

// =>:changes list all changes

// =>Ctrl+i move to next instance in jump list ❌

// =>Ctrl+o move to previous instance in jump list

// =>g, move to next instance in change list

// =>g; move to previous instance in change list
