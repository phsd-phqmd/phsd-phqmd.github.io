---
title: "Code"
draft: false
---

<h3 id="the-phqmd-approach-is-under-development">The approach is under development.</h3>
<p>Presently it can be provided to experimental collaborations by special request.</p>

{{< rawhtml >}}
<form action="https://api.staticforms.xyz/submit" method="post">
  <input type="hidden" name="accessKey" value="TU_ACCESS_KEY_AQUI">

  <div class="row gutters">
    <div class="col col-3">
      <div class="form-item">
        <select class="small" name="$Title" required>
          <option value="" disabled selected hidden>Please, select</option>
          <option value="Ms">Ms.</option>
          <option value="Mr">Mr.</option>
          <option value="Dr">Dr.</option>
          <option value="Prof">Prof.</option>
        </select>
      </div>
    </div>

    <div class="col col-3">
      <div class="form-item">
        <input type="text" class="small" name="$user-name" placeholder="Full name*" required>
      </div>
    </div>

    <div class="col col-3">
      <div class="form-item">
        <input type="email" class="small" name="$email" placeholder="Email*" required>
      </div>
    </div>

    <div class="col col-3">
      <div class="form-item">
        <input type="text" class="small" name="$institution" placeholder="Institution*" required>
      </div>
    </div>
  </div>

  <div class="row gutters">
    <div class="col col-3">
      <div class="form-item">
        <input type="text" class="small" name="$group" placeholder="Group/Collaboration*" required>
      </div>
    </div>

    <div class="col col-3">
      <div class="form-item">
        <input type="text" class="small" name="$address" placeholder="Street, Postal code">
      </div>
    </div>

    <div class="col col-3">
      <div class="form-item">
        <input type="text" class="small" name="$city" placeholder="City*" required>
      </div>
    </div>

    <div class="col col-3">
      <div class="form-item">
        <input type="text" class="small" name="$country" placeholder="Country*" required>
      </div>
    </div>
  </div>

  <div class="form-item">
    <textarea rows="6" name="$Description" placeholder="Please give a brief description of your project." required></textarea>
  </div>

  <div class="form-item form-checkboxes">
    <label class="checkbox" name="$License">
      <input type="checkbox" name="License_chk" value="agree" required>
      I certify that the above information is correct <span class="req">*</span>
    </label>
  </div>

  <input type="hidden" name="redirectTo" value="https://TU_DOMINIO/">
  <input type="text" name="honeypot" style="display:none">

  <button type="submit" class="button amber small">Submit</button>
</form>
{{< /rawhtml >}}
