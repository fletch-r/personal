import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import Code from '../components/Code';
import SimpleCommitIcon from '../assets/SimpleCommitIcon.png';
import Tooltip from '../components/Tooltip';
import { VSCodeIcon } from '../icons';

function SimpleCommit() {
  return (
    <section className='flex flex-col gap-10'>
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-4">
          <img src={SimpleCommitIcon} alt="Simple Commit" width={50} />
          <h1 className="text-4xl font-cals tracking-wider leading-none">
            Simple Commit
          </h1>
        </div>
        <div className='flex items-center justify-start gap-4'>
          <Tooltip label="View Repository">
            <a
              href="https://github.com/fletch-r/simple-commit"
              target='_blank'
              rel="noreferrer"
              className="hover:bg-steal-300 rounded-full w-full h-full px-1 py-1 transition-all hover:bg-opacity-20 flex justify-center items-center mt-1"
            >
              <GitHubIcon />
            </a>
          </Tooltip>
          <Tooltip label="View VSCode Extension">
            <a
              href="https://marketplace.visualstudio.com/items?itemName=0xATHERIS.simple-commit"
              target='_blank'
              rel="noreferrer"
              className="hover:bg-blue-300 rounded-full px-1 py-1 transition-all hover:bg-opacity-20 flex justify-center items-center mt-1"
            >
              <VSCodeIcon className="fill-white w-6 h-6" />
            </a>
          </Tooltip>
        </div>
      </div>

      <article className="flex flex-col gap-8 w-full">
        <h4>
          Simple Commit is a VSCode extension that simplifies the commit process for developers. It provides an easy-to-use interface for writing commit messages and includes some useful features to help ensure consistent and meaningful commit messages.
        </h4>

        <figure>
          <figcaption className="text-2xl font-cals mb-2">Features</figcaption>
          <ul className="space-y-2 list-disc list-inside text-gray-200 pl-4">
            <li>Provides simple input boxes or selection boxes for writing commit messages.</li>
            <li>
              If you&apos;re committing without having any changes staged. Simple Commit will first prompt you to select what file(s) you wish to stage.
            </li>
            <li>Automatically detects and suggests issue numbers from your current branch.</li>
            <li>
              Supports common commit message formats, such as the <a href="https://www.conventionalcommits.org/en/v1.0.0/">Conventional Commits</a> specification.
            </li>
            <li>
              Supports <a href="https://github.com/carloscuesta/gitmoji">Gitmoji</a>. Add an emoji to your commit message for easy and quick identification of the commit type.
            </li>
          </ul>
        </figure>

        <figure>
          <figcaption className="text-2xl font-cals mb-2">Usage</figcaption>
          <h4 className="pl-4 font-bold mb-2">To use Simple Commit, either:</h4>
          <ol className="space-y-4 list-decimal list-inside text-gray-200 pl-4">
            <li>
              Start Simple Commit:
              <ul className="pl-5 mt-2 space-y-1 list-disc list-inside">
                <li>
                  Click the Simple Commit icon in the Source Control tab which is usually to the right of the refresh
                  icon.
                </li>
                <li>
                  Open the command palette in VSCode (usually with <Code>Ctrl + Shift + P</Code> or <Code>Cmd + Shift + P</Code>), type &quot;Simple Commit&quot; and select the appropriate command.
                </li>
              </ul>
              If you have a custom template in your settings the following steps may be out of order.
            </li>
            <li>
              Choose Changes to Stage:
              <ul className="pl-5 mt-2 space-y-1 list-disc list-inside">
                <li>
                  If you haven&apos;t staged any commits the first prompt will be a multi-select prompt asking you to select one or more files to stage for this commit. If you have already staged changes then this step will be skipped.
                </li>
              </ul>
            </li>
            <li>
              Type:
              <ul className="pl-5 mt-2 space-y-1 list-disc list-inside">
                <li>
                  Choose the type of commit you&apos;re making. For example, <span>fix</span> which would be selected for bug fix type commits.
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
                      <b>Saved Scopes</b>: You will see a list of previously used scopes that have been saved in your <Code>settings.json</Code> which you can choose from.
                    </li>
                    <li>
                      <b>One Time Scope</b>: You will be prompted to enter a scope which will appear in your commit message but not be saved to your saved scopes in your <Code>settings.json</Code>.
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              Emoji:
              <ul className="pl-5 mt-2 space-y-1 list-disc list-inside">
                <li>
                  Choose an emoji to appear in your commit message. The options will appear with the emoji and a description of what the emoji represents. This allows for quick and easy identification of what the particular commit message was about without having to read the message for context.
                </li>
              </ul>
            </li>
            <li>
              Number:
              <ul className="pl-5 mt-2 space-y-1 list-disc list-inside">
                <li>
                  Simple Commit should auto-detect your issue/ticket number and pre-populate the input box with the detected number. If your desired number doesn&apos;t automatically appear in the prompt please enter your desired issue/ticket number message or modify <Code>simpleCommit.issueRegex</Code> in your <Code>settings.json</Code> with a custom regex that you know detects your issue/ticket number.
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
                  This should be a longer description message about what changes you have made and this is where you can explain yourself in more detail or provide any other context.
                </li>
              </ul>
            </li>
            <li>
              Footer:
              <ul className="pl-5 mt-2 space-y-1 list-disc list-inside">
                <li>
                  The footer is usually only used for breaking changes and should start with <span>BREAKING CHANGE:</span>.
                </li>
              </ul>
            </li>
          </ol>
          <p className="pl-4 mt-4">
            You can also use the enter key to quickly skip through the available suggestions.
          </p>
        </figure>

        <div>
          <h2 className="text-2xl font-cals mb-2">Configuration</h2>

          <div className="flex flex-col gap-8 pl-4">
            <p>
              Simple Commit can be configured through VSCode settings. To access the settings, go to
              &quot;File&quot; {'>'} &quot;Preferences&quot; {'>'} &quot;Settings&quot; or use the keyboard shortcut
              <Code>Ctrl + ,</Code> or
              <Code>Cmd + ,</Code>.
            </p>

            <div>
              <b>Simple Commit</b> extension settings start with <Code>simpleCommit</Code>
            </div>

            <p>Here are some of the configuration options:</p>

            <section className="border-2 rounded border-neutral-700 bg-neutral-800 overflow-auto">
              <table className="w-full">
                <thead className="border-b border-neutral-500 bg-neutral-700">
                  <tr>
                    <th className="py-2 text-sm">Setting</th>
                    <th className="py-2 text-sm">Default</th>
                    <th className="py-2 text-sm">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-500 bg-neutral-800">
                  <tr>
                    <td className="text-center p-4 text-sm">scopes</td>
                    <td className="p-4 text-sm text-center">
                      <Code>[]</Code>
                    </td>
                    <td className="p-4 text-sm">Saved scopes of previous commits.</td>
                  </tr>
                  <tr>
                    <td className="text-center p-4 text-sm">issueRegex</td>
                    <td className="text-center p-4 text-sm">
                      <Code>&quot;(?!.*\/)([^\\d]*)(\\d+)&quot;</Code>
                    </td>
                    <td className="p-4 text-sm">Add a custom regex if the default regex for Simple Commit doesn&apos;t automatically detect your issue number.</td>
                  </tr>
                  <tr>
                    <td className="text-center p-4 text-sm">template</td>
                    <td className="text-center p-4 text-sm">
                      <Code>{'"<type><scope>: <emoji> <number> - <description>\n\n<body>\n\n<footer>"'}</Code>
                    </td>
                    <td className="p-4 text-sm">The template for your commit message. You can customize your commit template to allow for your preferred commit message structure.</td>
                  </tr>
                </tbody>
              </table>
            </section>

            <section>
              <ul>
                <li className="mb-4 list-disc list-inside">
                  <Code>{'<type>'}</Code> - This will be replaced by the value you choose from the Type prompt. Examples, fix, feat, style.
                </li>
                <li className="mb-4 list-disc list-inside">
                  <Code>{'<scope>'}</Code> - This will be replaced by the Scope prompt. Your scope will be incased in ().
                </li>
                <li className="mb-4 list-disc list-inside">
                  <Code>{'<emoji>'}</Code> - This will be replaced by the Emoji prompt.
                </li>
                <li className="mb-4 list-disc list-inside">
                  <Code>{'<number>'}</Code> - This will be replaced by the Issue/Ticket Number prompt.
                </li>
                <li className="mb-4 list-disc list-inside">
                  <Code>{'<description>'}</Code> - This will get replaced by the Description prompt.
                </li>
                <li className="mb-4 list-disc list-inside">
                  <Code>{'<body>'}</Code> - This will get replaced by the Body prompt.
                </li>
                <li className="list-disc list-inside">
                  <Code>{'<footer>'}</Code> - This will get replaced by the Footer prompt.
                </li>
              </ul>
            </section>
          </div>
        </div>
      </article>
    </section>
  )
}

export default SimpleCommit
