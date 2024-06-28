<script>
    import {aboutCardItems} from '$lib/aboutCardItems';
</script>

<outer-frame>
    {#each aboutCardItems as {header, content}, index (index)}
        <!--        <a href={item.href}>-->
        <a href=#>
            <div class="project-input-group">
                <project-input class="project-input-field">
                    {#each content as {subheader, text}}
                        <div class="content-item">
                            {#if subheader}
                                <strong class="content-subheader">{subheader}</strong>
                            {/if}
                            <p class="content-text">{text}</p>
                            <br>
                        </div>
                    {/each}
                </project-input>
                <label for="name" class="project-input-label card-title"><strong>{header}</strong></label>
            </div>
        </a>
    {/each}
</outer-frame>

<style>
    outer-frame {
        /*position: relative;*/
        /*display: flex;*/
        /*flex-direction: column;*/
        /*top: 2.5rem;*/
        padding: 2rem;
        /* border: 2px dashed red; */

        min-height: 110vh;

        /*border: var(--debug-2);*/

    }

    .card-title {
        color: var(--sprobest-light-secondary-text);

        text-decoration: none;
        font-size: var(--big-text-size);
        font-weight: bolder;
        text-align: center;
        margin-bottom: var(--spacing-md);


        /*border: var(--debug);*/
    }

    .project-input-group {
        /* border: 2px dashed red; */

        position: relative;
        min-height: 5rem;
        height: auto;
        margin-bottom: 5rem;

        padding: 5rem 1rem;

        /*border: var(--debug)*/

    }

    .project-input-field {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: auto;
        font-size: var(--normal-font-size);
        border: 1px solid var(--border-color);
        border-radius: 0.5rem;
        outline: none;
        padding: 2rem;
        margin-bottom: 2rem;
        background: none;
        z-index: 1;

        /*border: var(--debug-2)*/
    }

    .project-input-label {
        position: absolute;
        left: 1rem;
        top: 1rem;
        padding: 0 0.25rem;
        background-color: var(--sprobest-light-bg);
        color: var(--project-input-color);
        font-size: var(--normal-font-size);
        transition: 0.3s;
    }

    .submit-button {
        display: block;
        margin-right: auto;
        padding: 0.75rem 2rem;
        outline: none;
        border: none;
        background-color: var(--sprobest-light-secondary-bg);
        color: var(--sprobest-light-text);
        font-size: var(--normal-font-size);
        border-radius: 0.5rem;
        cursor: pointer;
        transition: 0.3s;
    }

    .submit-button:hover {
        box-shadow: 0 10px 36px rgba(0, 0, 0, 0.5);
    }

    /* Move label up on project-input focus */

    .project-input-field:focus + .project-input-label,
    .project-input-field:not(:placeholder-shown).project-input-field:not(:focus)
    + .project-input-label {
        top: -0.8rem;
        left: 0.8rem;
        color: var(--sprobest-light-text);
        font-size: var(--large-font-size);
        font-weight: 500;
        z-index: 10;
    }

    /* Border color change on project-input focus */
    .project-input-field:focus {
        border: 1.5px solid var(--sprobest-light-text);
    }
</style>
