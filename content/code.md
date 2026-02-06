---
title: "Code"
draft: false
---

<h3>The approach is under development.</h3>
<p>Presently it can be provided to experimental collaborations by special request.</p>

{{< rawhtml >}}
<style>
  .code-form-wrap { max-width: 900px; margin: 24px auto 10px; }
  .code-form-wrap .panel { border-radius: 10px; }
  .code-form-wrap .panel-heading { border-top-left-radius: 10px; border-top-right-radius: 10px; }
  .code-form-wrap .help-block { margin-top: 6px; }
  .code-form-wrap .btn-primary { border-radius: 8px; padding: 10px 16px; font-weight: 600; }
  .code-form-wrap textarea { resize: vertical; }
  .code-form-wrap .req { color: #d9534f; }
</style>

<div class="code-form-wrap">
  <div class="panel panel-default">
    <div class="panel-heading">
      <strong>Request access</strong>
      <span class="text-muted"> (experimental collaborations)</span>
    </div>

    <div class="panel-body">
      <form action="https://api.staticforms.xyz/submit" method="post" class="form-horizontal">
        <input type="hidden" name="accessKey" value="TU_ACCESS_KEY_AQUI">
        <input type="hidden" name="redirectTo" value="https://TU_DOMINIO/">
        <input type="text" name="honeypot" style="display:none">

        <div class="row">
          <div class="col-sm-3">
            <div class="form-group">
              <label class="control-label">Title <span class="req">*</span></label>
              <select class="form-control" name="$Title" required>
                <option value="" disabled selected hidden>Please, select</option>
                <option value="Ms">Ms.</option>
                <option value="Mr">Mr.</option>
                <option value="Dr">Dr.</option>
                <option value="Prof">Prof.</option>
              </select>
            </div>
          </div>

          <div class="col-sm-9">
            <div class="form-group">
              <label class="control-label">Full name <span class="req">*</span></label>
              <input type="text" class="form-control" name="$user-name" placeholder="Full name" required>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-sm-6">
            <div class="form-group">
              <label class="control-label">Email <span class="req">*</span></label>
              <input type="email" class="form-control" name="$email" placeholder="name@institute.org" required>
            </div>
          </div>

          <div class="col-sm-6">
            <div class="form-group">
              <label class="control-label">Institution <span class="req">*</span></label>
              <input type="text" class="form-control" name="$institution" placeholder="Institution" required>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-sm-6">
            <div class="form-group">
              <label class="control-label">Group / Collaboration <span class="req">*</span></label>
              <input type="text" class="form-control" name="$group" placeholder="e.g. HADES, ALICE, …" required>
            </div>
          </div>

          <div class="col-sm-6">
            <div class="form-group">
              <label class="control-label">Status <span class="req">*</span></label>
              <select class="form-control" name="$status" required>
                <option value="" disabled selected hidden>Please, select</option>
                <option value="Student">Student</option>
                <option value="PhD student">PhD student</option>
                <option value="Postdoc">Postdoc</option>
                <option value="Professor">Professor</option>
                <option value="Staff/Engineer">Staff/Engineer</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-sm-6">
            <div class="form-group">
              <label class="control-label">City <span class="req">*</span></label>
              <input type="text" class="form-control" name="$city" placeholder="City" required>
            </div>
          </div>

          <div class="col-sm-6">
            <div class="form-group">
              <label class="control-label">Country <span class="req">*</span></label>
              <input type="text" class="form-control" name="$country" placeholder="Country" required>
            </div>
          </div>
        </div>

        <div class="form-group">
          <label class="control-label">Project description <span class="req">*</span></label>
          <textarea class="form-control" rows="6" name="$Description"
            placeholder="Please give a brief description of your project (goals, data/energy range, observables, timeline)." required></textarea>
          <p class="help-block text-muted">We use this to evaluate requests and coordinate distribution.</p>
        </div>

        <div class="checkbox">
          <label>
            <input type="checkbox" name="License_chk" value="agree" required>
            I certify that the above information is correct <span class="req">*</span>
          </label>
        </div>

        <hr>

        <button type="submit" class="btn btn-primary">Submit request</button>
      </form>
    </div>
  </div>
</div>
{{< /rawhtml >}}
