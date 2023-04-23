import GitHubIcon from '@mui/icons-material/GitHub';

function SimpleCommit() {
  return (
    <section className='flex flex-col gap-10'>
      <div className="flex items-baseline gap-4">
        <h1 className="text-4xl font-cals tracking-wider leading-none">
          Simple Commit
        </h1>
        <a
          href="https://github.com/0xATHERIS"
          className="hover:bg-steal-300 rounded-full px-1 py-1 transition-all hover:bg-opacity-20 flex justify-center items-center"
        >
          <GitHubIcon className="w-full" />
        </a>
      </div>

      <article className="flex flex-col gap-8 w-full">
        <h4>
          Simple Commit is a VSCode extension that simplifies the commit process
          for developers. It provides an easy-to-use interface for writing commit messages
          and includes some useful features to help ensure consistent and meaningful commit messages.
        </h4>

        <figure>
          <figcaption className="text-2xl font-cals mb-2">Features</figcaption>
          <ul className="space-y-2 text-gray-500 list-disc list-inside dark:text-gray-200 pl-4">
            <li>Provides simple input boxes or selection boxes for writing commit messages.</li>
            <li>
              If you're committing without having any changes staged. Simple Commit will first prompt you to select 
              what file(s) you wish to stage.
            </li>
            <li>Automatically detects and suggests issue numbers from your current branch.</li>
            <li>
              Supports common commit message formats, such as the 
              <a href="https://www.conventionalcommits.org/en/v1.0.0/">Conventional Commits</a> specification.
            </li>
            <li>
              Supports <a href="https://github.com/carloscuesta/gitmoji">Gitmoji</a>. Add an emoji to your commit 
              message for easy and quick identification of the commit type.
            </li>
          </ul>
        </figure>

        <figure>
          <figcaption className="text-2xl font-cals mb-2">Usage</figcaption>
          <h4 className="pl-4 font-bold mb-2">To use Simple Commit, either:</h4>
          <ol className="space-y-4 text-gray-500 list-decimal list-inside dark:text-gray-200 pl-4">
            <li>
              Start Simple Commit:
              <ul className="pl-5 mt-2 space-y-1 list-disc list-inside">
                <li>
                  Click the Simple Commit icon in the Source Control tab which is usually to the right of the refresh 
                  icon.
                </li>
                <li>
                  Open the command palette in VSCode (usually with 
                  <code className="border rounded px-2 border-steal-500 py-1">Ctrl + Shift + P</code> 
                  or <code className="border rounded px-2 border-steal-500 py-1">Cmd + Shift + P</code>), 
                  type "Simple Commit" and select the appropriate command.
                </li>
              </ul>
              If you have a custom template in your settings the following steps may be out of order.
            </li>
            <li>
              List item two
              <ul className="pl-5 mt-2 space-y-1 list-disc list-inside">
                <li>I'm not sure if we'll bother styling more than two levels deep.</li>
                <li>Two is already too much, three is guaranteed to be a bad idea.</li>
                <li>If you nest four levels deep you belong in prison.</li>
              </ul>
            </li>
            <li>
              Choose Changes to Stage:
              <ul className="pl-5 mt-2 space-y-1 list-disc list-inside">
                <li>
                  If you haven't staged any commits the first prompt will be a multi-select prompt asking you to 
                  select one or more files to stage for this commit. If you have already staged changes then this 
                  step will be skipped.
                </li>
              </ul>
            </li>
            <li>
              Type:
              <ul className="pl-5 mt-2 space-y-1 list-disc list-inside">
                <li>
                  Choose the type of commit you're making. For example, <span>fix</span> which would be selected for 
                  bug fix type commits.
                </li>
              </ul>
            </li>
            <li>
              Scope:
              <ul className="pl-5 mt-2 space-y-1 list-disc list-inside">
                <li>
                  You will be prompted with 3 options.
                  <ul className="pl-5 mt-2 space-y-1 list-disc list-inside">
                    <li>
                      <b>None</b>: Scope will be missed out from the commit message.
                    </li>
                    <li>
                      <b>Saved Scopes</b>: You will see a list of previously used scopes that have been saved in 
                      your <code className="border rounded px-2 border-steal-500 py-1">settings.json</code> which 
                      you can choose from.
                    </li>
                    <li>
                      <b>One Time Scope</b>: You will be prompted to enter a scope which will appear in your commit 
                      message but not be saved to your saved scopes in your 
                      <code className="border rounded px-2 border-steal-500 py-1">settings.json</code>.
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              Emoji:
              <ul className="pl-5 mt-2 space-y-1 list-disc list-inside">
                <li>
                  Choose an emoji to appear in your commit message. The options will appear with the emoji and a 
                  description of what the emoji represents. This allows for quick and easy identification of what 
                  the particular commit message was about without having to read the message for context.
                </li>
              </ul>
            </li>
            <li>
              Number:
              <ul className="pl-5 mt-2 space-y-1 list-disc list-inside">
                <li>
                  Simple Commit should auto-detect your issue/ticket number and pre-populate the input box with the 
                  detected number. If your desired number doesn't automatically appear in the prompt please enter 
                  your desired issue/ticket number message or modify 
                  <code className="border rounded px-2 border-steal-500 py-1">simpleCommit.issueRegex</code> in 
                  your <code className="border rounded px-2 border-steal-500 py-1">settings.json</code> with a 
                  custom regex that you know detects your issue/ticket number.
                </li>
              </ul>
            </li>
            <li>
              Description:
              <ul className="pl-5 mt-2 space-y-1 list-disc list-inside">
                <li>This should be a short description of what changes you have made and are committing.</li>
              </ul>
            </li>
            <li>
              Body:
              <ul className="pl-5 mt-2 space-y-1 list-disc list-inside">
                <li>
                  This should be a longer description message about what changes you have made and this is where you 
                  can explain yourself in more detail or provide any other context.
                </li>
              </ul>
            </li>
            <li>
              Footer:
              <ul className="pl-5 mt-2 space-y-1 list-disc list-inside">
                <li>
                  The footer is usually only used for breaking changes and should start with 
                  <span>BREAKING CHANGE:</span>.
                </li>
              </ul>
            </li>
          </ol>
          <p className="pl-4 my-4">
            You can also use the enter key to quickly skip through the available suggestions.
          </p>
        </figure>

        <h2 className="text-2xl font-cals mb-2">Configuration</h2>
        <p className="pl-4">
          Simple Commit can be configured through VSCode settings. To access the settings, go to 
          "File" {'>'} "Preferences" {'>'} "Settings" or use the keyboard shortcut 
          <code className="border rounded px-2 border-steal-500 py-1">Ctrl + ,</code> or 
          <code className="border rounded px-2 border-steal-500 py-1">Cmd + ,</code>.
        </p>
      </article>
    </section>
  )
}

export default SimpleCommit
